package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"regexp"
	"strings"
)

type RequestBody struct {
	String string `json:"string"`
}

type ResponseBody struct {
	String string `json:"string"`
}

func main() {
	http.HandleFunc("/api/recipe", recipeHandler)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func recipeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var requestBody RequestBody
	if err := json.NewDecoder(r.Body).Decode(&requestBody); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	block := output(requestBody.String)
	paragraphs := splitBlock(block)
	str := ""

	for i := range paragraphs {
		str = str + (paragraphs[i])
		str = str + "\n"
		if i%4 == 0 {
			str = str + "\n"
		}
	}
	fmt.Println(str)

	responseBody := ResponseBody{
		String: str,
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(responseBody); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func checkForNum(str string) bool {
	match, error := regexp.MatchString("[0-9]+", str)
	if error != nil {
		fmt.Println("Error:", error)
		return false
	}
	return match
}

func splitBlock(essay string) []string {

	paragraphs := strings.Split(essay, "\n\n")

	for i := range paragraphs {
		paragraphs[i] = strings.TrimSpace(paragraphs[i])
	}

	return paragraphs
}

func output(first string) string {
	numeric := regexp.MustCompile(`\d`).MatchString(first)
	if numeric {
		return "enter a valid input"
	}
	url := "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=" + first

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "034d289419msh0c3f1b2a45d6a4bp108a12jsn1f6bbb1643aa")
	req.Header.Add("X-RapidAPI-Host", "recipe-by-api-ninjas.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	var remove = strings.ReplaceAll(string(body), "\"title\"", "\n\ntitle")
	remove = strings.ReplaceAll(remove, "\"ingredients\"", "\n\ningredients")
	remove = strings.ReplaceAll(remove, "\"servings\"", "\n\nservings")
	remove = strings.ReplaceAll(remove, "\"instructions\"", "\n\ninstructions")
	remove = strings.ReplaceAll(remove, "\"", "")
	remove = strings.ReplaceAll(remove, "}, {", "")
	remove = strings.ReplaceAll(remove, "[", "")
	remove = strings.ReplaceAll(remove, "]", "")
	remove = strings.ReplaceAll(remove, "{", "")
	remove = strings.ReplaceAll(remove, "}", "")
	remove = strings.ReplaceAll(remove, ",", "")

	return remove

}

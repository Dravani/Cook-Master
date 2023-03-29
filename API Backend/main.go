package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"regexp"
	"strings"
)

func main() {
	// var first string
	// fmt.Println("what food recipes are you looking for?")
	// // Taking input from user
	// fmt.Scanln(&first)

	//fmt.Println(output(first))

	// essay := output(first)
	// paragraphs := splitIntoParagraphs(essay)
	// str := ""

	// for i := range paragraphs {
	// 	str = str + (paragraphs[i])
	// 	str = str + "\n"
	// 	if i%4 == 0 {
	// 		str = str + "\n"
	// 	}
	// }
	// fmt.Println(str)
	Test1()
	Test2()
	Test3()
	Test4()
	Test5()
	Test6()
	Test7()
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

func Test1() {
	var got = output("apple 12")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 1: Fail")
	} else {
		fmt.Println("Test 1: Pass")
	}
}
func Test2() {
	var got = output("7 cheese dip")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 2: Fail")
	} else {
		fmt.Println("Test 2: Pass")
	}
}
func Test3() {
	var got = output("pie14")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 3: Fail")
	} else {
		fmt.Println("Test 3: Pass")
	}
}
func Test4() {
	var got = output("f1sh")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 4: Fail")
	} else {
		fmt.Println("Test 4: Pass")
	}
}
func Test5() {
	var got = output("289broccoli")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 5: Fail")
	} else {
		fmt.Println("Test 5: Pass")
	}
}

func Test6() {
	var got = checkForNum("slicer 14")
	var want = true
	if got == want {
		fmt.Println("Test 6: Pass")
	} else {
		fmt.Println("Test 6: Fail")
	}
}

func Test7() {
	block := `This is a

multiline

string.`
	got := splitBlock(block)

	var want = 3

	if len(got) == want {
		fmt.Println("Test 7: Pass")
	} else {
		fmt.Println("Test 7: Fail")
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

func splitBlock(block string) []string {
	par := strings.Split(block, "\n\n")

	for i := range par {
		par[i] = strings.TrimSpace(par[i])
	}

	return par
}

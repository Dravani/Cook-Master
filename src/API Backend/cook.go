package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"regexp"
	"strings"
)

func main() {

	//var first string
	//fmt.Println("what food recipes are you looking for?")
	//fmt.Scanln(&first)
	//fmt.Println(output(first))
	Test1()
	Test2()
	Test3()
	Test4()
	Test5()

}
func output(first string) string {
	numeric := regexp.MustCompile(`\d`).MatchString(first)
	if numeric {
		return "enter a valid input"
	}
	url := "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=" + first

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "6f416537bcmsha12869768d0b7d0p123a2fjsn937d84d161ee")
	req.Header.Add("X-RapidAPI-Host", "nutrition-by-api-ninjas.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	body, _ := ioutil.ReadAll(res.Body)

	var remove = strings.ReplaceAll(string(body), ",", "\n")
	remove = strings.ReplaceAll(remove, "{", "")
	remove = strings.ReplaceAll(remove, "}", "")
	remove = strings.ReplaceAll(remove, "[", "")
	remove = strings.ReplaceAll(remove, "]", "")
	remove = strings.ReplaceAll(remove, "\"", "")
	remove = strings.ReplaceAll(remove, "_", " ")
	return remove
	//fmt.Println(remove)
}
func Test1() {
	var got = output("chicken")
	var want = "enter a valid input"
	if got == want {
		fmt.Println("Test 1: Fail")
	} else {
		fmt.Println("Test 1: Pass")
	}
}
func Test2() {
	var got = output("chicken 65")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 2: Fail")
	} else {
		fmt.Println("Test 2: Pass")
	}
}
func Test3() {
	var got = output("fish12")
	var want = "enter a valid input"
	if got != want {
		fmt.Println("Test 3: Fail")
	} else {
		fmt.Println("Test 3: Pass")
	}
}
func Test4() {
	var got = output("cor2890n")
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

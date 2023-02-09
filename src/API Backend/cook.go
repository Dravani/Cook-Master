package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	url := "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=chicken"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "6f416537bcmsha12869768d0b7d0p123a2fjsn937d84d161ee")
	req.Header.Add("X-RapidAPI-Host", "nutrition-by-api-ninjas.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	//defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	//fmt.Println(res)
	fmt.Println(string(body))
}

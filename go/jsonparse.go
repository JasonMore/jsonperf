package main

import(
	"io/ioutil"
	"fmt"
	"path/filepath"
	"encoding/json"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}


type city struct {
	city string
	location [2]float32
	pop int
	state string
	id string
}

func main(){
	citiesJson := getJson()
	var cities []city

	err := json.Unmarshal(citiesJson, &cities)
	check(err)

//	fmt.Println(cities)
	fmt.Printf("Results: %v\n", cities)
}

func getJson()(citiesJson []byte){
	var path string
	var err error

	path, _ = filepath.Abs("../cities.json")
	citiesJson, err = ioutil.ReadFile(path)

	// webstorm does weird thing with paths
	if(err != nil){
		path, _ = filepath.Abs("cities.json")
		citiesJson, err = ioutil.ReadFile(path)
	}

	check(err)
	return citiesJson
}
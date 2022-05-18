import { getCities } from "./database.js"



//invoke getCities and assign its return value to cities
const cities = getCities()

//the function below is imported into the main
//here we are declaring and exporting a function which will help display the html representation for cities with service 
export const CityList = () => {
    //we then create a open ordered list and set it equal to citiesHTML. The ordered list is what gives it numbers 
    let citiesHTML = "<ol>"
//this for of loop iterates through the cities so that we can display the city names in its own container
    for (const city of cities) {
        //notice how we are doing += to assign the city name to the citiesHTML inside the forOf loop
        citiesHTML += `<li>${city.name}</li>`
    }
    //we then close the citiesHTML that we started at the beginning of this 
    citiesHTML += "</ol>"
//we return the citiesHTML because that is what we are wanting to display
    return citiesHTML
}


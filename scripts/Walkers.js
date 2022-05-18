import { getWalkers, getWalkersCities, getCities } from "./database.js"


const walkerCities = getWalkersCities();
const newCities = getCities();


//I need to find all cities for the walker and display them

//First define a function that will get all objects in walkerCities array that are for the walker that was clicked on. It should return an array of all matching objects 
// The function needs the walker information, so define a parameter
export const filterWalkerCitiesByName = (walker) => {
 // Define an empty array to store all of the assignment objects
    let assignments = []
    // Iterate the array value of walkerCities
     // If it does, add the current object to the array of assignments
    for (const walkerCity of walkerCities) {
        if (walker.id === walkerCity.walkerId) {
            assignments.push(walkerCity);
    }
    } 
     // After the loop is done, return the assignments array      
    return assignments
}

 
//Then define a function that takes in the array of matching objects and use the cityId property on each one to find the matching city name. It should return a string containing all the city names. 
// Define a function that builds a string of city names. Needs a parameter for assignments array.
export const assignedCityNames = (assignments) => {
    //use the cityId property on each array of matching objects to find the matching city name. 
    //Define an empty string that will get appended with matching cities
    let cityNames = "";
    //iterate the array of assignment objects
    for (const assignment of assignments) {
        //For each assignment, iterate the cities array to find the match 
        for (const city of newCities) {
            // Check if the primary key of the walker equals the foreign key on the assignment
            if (city.id === assignment.cityId) {
                //Add the name of the matching city to the string of city names 
                cityNames += ` ${city.name}`
            }
        }
    }
    //after the loop is done, return the string 
    return cityNames
}


//this entire block of code makes it so when you click on one of the walkers it tells you the area that they serviced in a pop up window.
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                   const assignments = filterWalkerCitiesByName(walker)
                   const cities = assignedCityNames(assignments)
                   //The line below creates a pop up box with a messages that tells which walker services what area.
                   window.alert(`${walker.name} services ${cities}`)
                }
            }
                }
            }
)

const walkers = getWalkers()

//Here we declare and export the function Walkers
export const Walkers = () => {
    //this function creates an unordered list called walkerHTML
    let walkerHTML = "<ul>"
//this for loop iterates through the walkers array that was imported at the top of the file. 
    for (const walker of walkers) {
        //This line of code was given in the directions. 
        //It assignes the value string interpolated walkerName into the walkerHTML 
        //the walker.id value that was interpolated into the list item's id
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
//we then need to close the unordered list 
    walkerHTML += "</ul>"
    //and return the walkerHTML value
return walkerHTML
}








  



   


//In this module we need the pets and the walkers because we are trying to match the two
import { getPets, getWalkers } from "./database.js"
//we also need the city names and filtered walker cities
import { assignedCityNames,filterWalkerCitiesByName } from "./Walkers.js";



// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the current walker assigned to a pet
const findWalker = (pet, allwalkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }
    return petWalker
}



//this function is defining and exporting a function named Assignments. 
export const Assignments = () => {
    //This function is creating an empty string which will display our current assignment sentence
    let assignmentHTML = ""
    assignmentHTML = "<ul>"
//The for loop is iterating through each pet 
    for (const currentPet of pets) {
        //we then create a variable currentPetWalker which invokes the find walkers function with currentPet and walkers as the arguments to find the current pet for each walker
        const currentPetWalker = findWalker(currentPet, walkers)
        //we then invoke the filterWalkerCitiesByName function with currentPetWalker as our argument to find out the cityId's each walker is responsible for.
        const assignmentServices = filterWalkerCitiesByName(currentPetWalker)
        //we then invoke the assignedCityNames function which passes the assignedServices which told what area the dog walker worked to retrieve the actual name of that city.
        const cityNames = assignedCityNames(assignmentServices)

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cityNames}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

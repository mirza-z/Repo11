// Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray here
// Create a function below this line
function myArrayFunction(myPets){
    var myNewPets = myPets;
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion") 
    return myNewPets;
}
myArrayFunction(myPetsArray);
// End of creating a function
module.exports = myArrayFunction;
// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array
// Create a function below this line
function myArrayFunction(myItems){
    myItems[2]=6;
    return myItems;
}
myArrayFunction(myArr);
// End of creating a function
module.exports = myArrayFunction;
// Only change code below this line
var one = [[2], [5, 6, 7], [8, 9]];
var two = [[2.5, 2], [0.5, 0.2], [8]];
var three = [[1, 2], [3, 4, 5, 6], [7, 8, 9]];
function multiplyArrayFunction(myArray){
    var sum = 0; product = 1;
    for(var i=0; i<myArray.length; i++){
        for(var j=0; j<myArray[i].length; j++){
            sum += myArray[i][j];
            product *= myArray[i][j];
        }
    }
    var arr = [];
    arr.push(product, sum);
    return arr;
}
// Only change code above this line
console.log(multiplyArrayFunction(one)); // Change this line
console.log(multiplyArrayFunction(two));
console.log(multiplyArrayFunction(three));
module.exports = multiplyArrayFunction;
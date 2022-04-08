// Only change code below this line
var one = [[13, 27, 18, 26], [4,5,1,3], [32,35,37,39], [1000,1001,857,1]];
var two = [[4, 9, 1, 3], [13,35,18,26], [32,35,97,39], [1000000,1001,857,1]];
var three = [[17, 23, 25, 12], [25,7,34,48], [4,10,18,21], [72,3,17,10]];

function largestNumFromArr(arr){
    var maxNumArray = [], larg = -Infinity;
    for(var i=0; i< arr.length; i++){
        larg = -Infinity;
        for(var j=0; j<arr[i].length; j++){
            if(arr[i][j] > larg){
                larg = arr[i][j];
            }
        }
        maxNumArray.push(larg);
    }
    return maxNumArray;
}
// Only change code above this line

console.log(largestNumFromArr(one));
console.log(largestNumFromArr(two));
console.log(largestNumFromArr(three));
module.exports = largestNumFromArr;
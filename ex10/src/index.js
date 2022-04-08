// Only change code below this line 
function myBouncer(arr){
    for(let i=0; i<arr.length; i++){
       if(!arr[i]){
           arr.splice(i,1);
           i--;
       }
    }
    return arr;
}
// Only change code above this line

console.log(myBouncer([null, NaN, 1, 2,  undefined])); //change this line
module.exports = myBouncer;
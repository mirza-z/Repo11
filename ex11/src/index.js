// Only change code below this line
function mySplice(arr1, arr2, n){
    var arr = arr2;
    for(let i=arr1.length-1; i>=0; i--){
        arr.splice(n,0,arr1[i]);
        n++;
    }
    return arr;
}
// Only change code above this line
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2)); //Change this line
module.exports = mySplice;
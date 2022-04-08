// Only change code below this code
var myArr = [2, 5, 9, 8, 1];
function bubbleSort(arr){
    var x=true, temp;
    while(x){
        x=false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                x = true;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(myArr));
// Only change code above this code
module.exports = bubbleSort;
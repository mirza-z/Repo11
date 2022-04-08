// Only change code below this line
function myMutation(arr){
    var x = 0, condition = arr[1].length;
    for(let i=0; i<arr.length; i++){
        arr[i]= arr[i].toLowerCase();
    }
    for(let i=0; i<arr[1].length; i++){
        for(let j=0; j< arr[0].length; j++){
            if(arr[1][i] == arr[0][j]){
                x++;
                break;;
            }
        }
    }
    if(x == condition){
        return true;
    } else{
        return false;
    }
}
// Only change code above this line

console.log(myMutation(["Mary", "Aarmy"])); //Change this line
module.exports = myMutation;
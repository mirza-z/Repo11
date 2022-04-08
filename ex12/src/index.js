// Only change code below this line
function splitArrayInGroups(arr, n){
    var result = [], temp = [], x=0;
   for(let i=0; i<n; i++){
       
       for(let j=0; j<n; j++){
           temp.push(arr[0]); 
           arr.shift();
           if(arr.length==0){
               x=1;
               break;
           }
       }
       result.push(temp);
       temp = [];
       if(x==1){
           break;
       }
   }
   return result;
}
// Only change code above this line

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5 , 6], 3)); // Change this line
module.exports = splitArrayInGroups;
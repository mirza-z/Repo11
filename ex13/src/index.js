// Only change code below this code
var str = 'Paragon!';
function myReverse(str){
    var rev = '';
    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
    str = rev;
    return str;
}
console.log(myReverse(str));
// Only change code below this code
module.exports = myReverse;
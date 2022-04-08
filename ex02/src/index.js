// Only change code below this code
var myStr = "Paragon is the best!";
function useMethods(str){
    var words = str.split('');
    var myReverse = words.reverse();
    myReverse = myReverse.join('');
    var countCharacters = myReverse.split(' ').map(x => x.length);
    return {myReverse, countCharacters};
}
console.log(useMethods(myStr));
// Only change code above this code
module.exports = useMethods;
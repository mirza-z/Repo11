// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
// Create a function below this line
function myArrayFunction(){
    var averageDayTemp=[], sum=0;
    for(let i=0; i<temps.length; i++){
        sum=0;
        for(let j=0; j<temps[i].length; j++){
            sum += temps[i][j];
        }
        averageDayTemp.push(sum/temps[i].length);
    }
    return averageDayTemp;
}
console.log(myArrayFunction());
// End of creating a function
module.exports = myArrayFunction;
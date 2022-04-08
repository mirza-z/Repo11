var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(temp) {
    var averageDayTemp = [];
    var sum = 0;

    for (var i = 0; i < temp.length; i++) {
        sum = 0;
        for (var j = 0; j < temp[i].length; j++) {
            sum += temp[i][j];
        }
        averageDayTemp.push(sum / 4);
    }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));

module.exports = myArrayFunction;
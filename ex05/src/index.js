// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array
// Create a function below this line
function myMonitorsFunction(){
    var monitorsList = [];
    var container = [];
    for(let i=0; i<monitorsListArray.length; i++){
        container = [];
        container.push(monitorsListArray[i],i+1);
        monitorsList.push(container);
    }
    return monitorsList;
}
console.log(myMonitorsFunction());
// End of creating a function
module.exports = myMonitorsFunction;
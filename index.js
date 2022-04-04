// Your code here
function createEmployeeRecord(array) {
    let obj = {
        firstName: array [0],
        familyName: array [1],
        title: array [2],
        payPerHour: array [3],
        timeInEvents: new Array(),
        timeOutEvents: new Array()

    }
    return obj
}
let createEmployeeRecords = function(array){
   return array.map(everyIndex => {
     return createEmployeeRecord(everyIndex)
    })
}
    function createTimeInEvent(obj, dateStamp){
        //console.log("object", obj)
        //console.log("date", dateStamp)
        let newArray = dateStamp.split(" ")
        //console.log("split", newArray)
        obj.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(newArray[1]),
            date: newArray[0],
        })
        return obj
    }
        function createTimeOutEvent(objTwo, dateStampTwo){
            //console.log("object", objTwo)
            //console.log("date", dateStampTwo)
        let newArrayTwo = dateStampTwo.split(" ")
       // console.log("split", newArrayTwo)
        objTwo.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(newArrayTwo[1], 10),
        date: newArrayTwo[0],
        })
        return objTwo
    }
        function hoursWorkedOnDate(objThree, dateForm){
            const timeIn = objThree.timeInEvents.find(timeInEvent => timeInEvent.date === dateForm);
            const timeOut = objThree.timeOutEvents.find(timeOutEvent => timeOutEvent.date === dateForm);
            return (timeOut.hour - timeIn.hour)/100;
        }

        function wagesEarnedOnDate(obj, dateForm){
            const timeIn = obj.timeInEvents.find(timeInEvent => timeInEvent)
            const timeOut = obj.timeOutEvents.find(timeOutEvent => timeOutEvent)
            //console.log(dateForm)
            return (hoursWorkedOnDate(obj, dateForm)) * obj.payPerHour
        }
        function allWagesFor(obj){
           // console.log(obj.timeInEvents)
            //wagesForFirstDay = wagesEarnedOnDate(obj, obj.timeInEvents[0].date)
            //console.log(wagesForFirstDay)
           const employeeDates = obj.timeInEvents.map(element => element.date)
           //console.log(employeeDates)
            let payable = employeeDates.reduce((a, b) => {
            return a + (wagesEarnedOnDate(obj, b))
            //console.log(a, b)
            },0)
           console.log(payable)
            return (payable)
        }
        function calculatePayroll(arrayOfObjects){
            const initialValue = 0;
             const sumWithInitialValue = arrayOfObjects.reduce((a, b) => {
             return a + allWagesFor(b)
            },initialValue)
            return sumWithInitialValue
        }
const readlineSync = require("readline-sync");

// function addNumbers(num 1, num2){
//     return readlineSync.question(" enter the operation: add, sub, mul, div ")

// }
function addNumbers(num1, num2) {
    return (+num1)+(+num2);
}
function multiplyNumbers(num1, num2) {
    return  num1*num2;
}
function divideNumbers(num1, num2) {
        return num1/num2;
}
function subtractNumbers(num1, num2) {
    return num1-num2;
}
var num1 = readlineSync.question("enter first number:")
var num2 = readlineSync.question("enter second number:")
var operation = readlineSync.question("which operation: add, mul, div, sub ")
function calculator  (num1, num2, operation)  {
    if(operation == "add") {
        console.log ((num1) + (num2) + " equals:"+ addNumbers(num1, num2));
    }
    else if(operation == "mul") {
        console.log (num1 + num2 +" equals:" + multiplyNumbers(num1, num2));
    }
    else if(operation == "div") {
        console.log (num1 + num2 +" equals:" + divideNumbers(num1, num2));
    }
    else if(operation == "sub") {
        console.log (num1 + num2 +"the result is:" + subtractNumbers(num1, num2));
    }

}

calculator (num1, num2, operation)




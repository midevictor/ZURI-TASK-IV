//create an arithmetic operation add, subtract, multiply, divide
//create a function that takes in two numbers and returns the result of the operation
function performMathOperator(num1, num2, mathOperator) {

    if (mathOperator === '+') {
        return num1 + num2;
    } else if (mathOperator === '-') {
        return num1 - num2;
    } else if (mathOperator === '*') {
        return num1 * num2;
    } else if (mathOperator === '/') {
        return num1 / num2;
    }
}
let num1 = parseInt(prompt('Enter a number:'));
console.log(num1);
let num2 = parseInt(prompt('Enter a number:'));
console.log(num2);
let mathOperator = prompt('Enter an operator:');
console.log(mathOperator);
let result = alert(`The result of ${num1} ${mathOperator} ${num2} is ${performMathOperator(num1, num2, mathOperator)}`);
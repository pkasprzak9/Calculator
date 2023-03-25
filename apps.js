let firstNum = '';
let secondNum = '';
let operator = '';
let result = null; // Keep track of the result of the previous calculation

const display = document.querySelector('#display');
const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', function(e) {
    if (e.target.classList.contains('numbers')) {
        if (operator === '') {
            const temp = e.target.innerHTML;
            if (display.innerHTML == 0) {
                display.innerHTML = temp;
            } else {
                display.innerHTML += temp;
            }
            firstNum += temp;
        } else {
            const temp = e.target.innerHTML;
            if (secondNum.length === 0) {
                display.innerHTML = temp;
            } else {
                display.innerHTML += temp;
            }
            secondNum += temp;
        }
    }
});

const operators = document.querySelector('#operators');
operators.addEventListener('click', function(e) {
    if (e.target.classList.contains('operators')) {
        if (result !== null && secondNum === '') {
            firstNum = result; // Use the result of the previous calculation as the first number
        }
        if (firstNum !== '' && secondNum !== ''){
            result = operate(operator, parseInt(firstNum), parseInt(secondNum))
            display.innerHTML = result;
            firstNum = result;
            secondNum = '';
            result = null;
        }
        operator = e.target.innerHTML;
    }
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function(e) {
    let score = operate(operator, parseInt(firstNum), parseInt(secondNum)); // Calculate the result using the operate function
    result = score; // Store the result of the calculation
    display.innerHTML = score;
    secondNum = '';
    operator = '';
});

const allClear = document.querySelector('#allClear');
allClear.addEventListener('click', function(e) {
    display.innerHTML = '0';
    firstNum = '';
    secondNum = '';
    operator = '';
    result = null; // Clear the result
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(e) {
    display.innerHTML = '';
    if (operator === '') {
        firstNum = '';
        display.innerHTML = '0'
    } else {
        operator = '';
        secondNum = '';
    }
});

function operate(operator, num1, num2) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}

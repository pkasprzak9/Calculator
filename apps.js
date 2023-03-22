function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}


function operate(operator, num1, num2){
    let score;
    switch (operator){
        case '+':
            score = add(num1, num2);
            break;
        case '-':
            score = subtract(num1, num2);
            break;
        case '*':
            score = multiply(num1, num2);
            break;
        case '/':
            score = divide(num1, num2);
            break
    }
    return score;
}

let firstNum = '';
let secondNum = '';
let operator = '';
const display = document.querySelector('#display');
const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', function(e) {
    if (e.target.classList.contains('numbers')){
        if (operator === ''){
            const temp = e.target.innerHTML;
            display.innerHTML += temp;
            firstNum += temp;
            console.log(firstNum)
        }
        else {
            const temp = e.target.innerHTML;
            if (secondNum.length === 0) {
                display.innerHTML = temp;
            } else {
                display.innerHTML += temp;
            }
            secondNum += temp;
            console.log(secondNum)
        }
    }
})

const operators = document.querySelector('#operators');
operators.addEventListener('click', function(e) {
    if (e.target.classList.contains('operators')){
        operator += e.target.innerHTML;
        console.log(operator)
    }
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', function(e) {
    const score = operate(operator, parseInt(firstNum), parseInt(secondNum));
    display.innerHTML = score;
    firstNum = score;
    secondNum = '';
    operator = '';
})

const allCLear = document.querySelector('#allClear');
allCLear.addEventListener('click', function(e) {
    display.innerHTML = '';
    firstNum = '';
    secondNum = '';
    operator = '';
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(e) {
    display.innerHTML = '';
    if (operator = ''){
        firstNum = '';
    }else {
        secondNum = '';
    }
})
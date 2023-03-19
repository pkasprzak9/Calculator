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

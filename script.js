// querySelectors
// select display
const display = document.querySelector("#display");
// select numbers
const one = document.querySelector("#_1");
const two = document.querySelector("#_2");
const three = document.querySelector("#_3");
const four = document.querySelector("#_4");
const five = document.querySelector("#_5");
const six = document.querySelector("#_6");
const seven = document.querySelector("#_7");
const eight = document.querySelector("#_8");
const nine = document.querySelector("#_9");
const zero = document.querySelector("#_0");
// select operators
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
// select equals
const equals = document.querySelector("#equal");
// select clear
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");

// basic opreation fucntions
function addition (a, b) {
    return a + b
}

function subtraction (a, b) {
    return a - b
}

function division (a, b) {
    return a / b
}

function multiplication (a, b) {
    return a * b
}

let firstOperand;
let secondOperand;
let operator;
let displayValue;
let operatorClick;
let arr = [];
// Operate takes 2 nums and call one of the basic operations
function operate(num1, num2, operator) {
    switch(operator){
        case "+":
            return addition(num1, num2);
        case "-":
            return subtraction(num1, num2);
        case "/":
            return division (num1, num2);
        case "*":
            return multiplication (num1, num2);
    }
}

function populateDisplay(digit) {
    if (arr.length === 0) {
        arr = [digit];
        return arr
    }
    arr.push(digit);
    return arr
}
// eventListeners of numbers
one.addEventListener("click", () => {
     display.textContent = populateDisplay(1).join("")
})
two.addEventListener("click", () => {
    display.textContent = populateDisplay(2).join("")
})
three.addEventListener("click", () => {
    display.textContent = populateDisplay(3).join("")
})
four.addEventListener("click", () => {
    display.textContent = populateDisplay(4).join("")
})
five.addEventListener("click", () => {
    display.textContent = populateDisplay(5).join("")
})
six.addEventListener("click", () => {
    display.textContent = populateDisplay(6).join("")
})
seven.addEventListener("click", () => {
    display.textContent = populateDisplay(7).join("")
})
eight.addEventListener("click", () => {
    display.textContent = populateDisplay(8).join("")
})
nine.addEventListener("click", () => {
    display.textContent = populateDisplay(9).join("")
})
zero.addEventListener("click", () => {
    display.textContent = populateDisplay(0).join("")
})
// eventListeners of operators
plus.addEventListener("click", () => {
    // the ability to use multiple operands with multiple operators
    if (operatorClick === undefined) {
    firstOperand = Number(display.textContent)
    display.textContent = `+`
    operator = "+";
    arr = [];
    operatorClick = 1;
    }
    else if (operatorClick === 1) {
        secondOperand = Number(display.textContent)
        firstOperand = display.textContent = operate(firstOperand, secondOperand, operator)
        arr = []
        operator = "+";
    }
})
minus.addEventListener("click", () => {
    if (operatorClick === undefined) {
    firstOperand = Number(display.textContent)
    display.textContent = `-`
    operator = "-";
    arr = [];
    operatorClick = 1;
    }
    else if (operatorClick === 1) {
        secondOperand = Number(display.textContent)
        firstOperand = display.textContent = operate(firstOperand, secondOperand, operator)
        arr = []
        operator = "-";
    }
})
divide.addEventListener("click", () => {
    if (operatorClick === undefined) {
    firstOperand = Number(display.textContent)
    display.textContent = `÷`
    operator = "/";
    arr = [];
    operatorClick = 1;
    }
    else if (operatorClick === 1) {
        secondOperand = Number(display.textContent)
        firstOperand = display.textContent = operate(firstOperand, secondOperand, operator)
        arr = []
        operator = "/";
    }
})
multiply.addEventListener("click", () => {
    if (operatorClick === undefined) {
    firstOperand = Number(display.textContent)
    display.textContent = `x`
    operator = "*";
    arr = [];
    operatorClick = 1;
    }
    else if (operatorClick === 1) {
        secondOperand = Number(display.textContent)
        firstOperand = display.textContent = operate(firstOperand, secondOperand, operator)
        arr = []
        operator = "*";
    }
})
// eventListener for Equals
equals.addEventListener("click", () => {
    secondOperand = Number(display.textContent)
    display.textContent = operate(firstOperand, secondOperand, operator)
    arr = []
    operatorClick = undefined;
})
// Missing edits
// 
// * Add decimal point
// * Add keyboard support (create a function that handles eventListener)
// * Create For loop for adding eventListeners to numbers

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
let equalClick;
let operatorClick;
let arr = [];
// Operate takes 2 nums and call one of the basic operations
function operate(num1, num2, operator) {
    switch(operator){
        case "+":
            if (((addition(num1, num2)).toString().length) > 12) {
                display.style.fontSize = "30px"; 
            }
            return addition(num1, num2);
        case "-":
            if (((subtraction(num1, num2)).toString().length) > 12) {
                display.style.fontSize = "30px"; 
            }
            return subtraction(num1, num2);
        case "/":
            if (((division(num1, num2)).toString().length) > 12) {
                display.style.fontSize = "30px"; 
            }
            return division (num1, num2);
        case "*":
            if (((multiplication(num1, num2)).toString().length) > 12) {
                display.style.fontSize = "30px"; 
            }
            return multiplication (num1, num2);
    }
}
// Iterate items into display
function populateDisplay(digit) {
    if (arr.length < 13) {
    display.style.fontSize = "50px";
    equalClick = undefined;
    arr.push(digit);
    return arr}
}
// Click Event handler
function clickHandler(operatorSign) {
    display.style.fontSize = "50px";
    // the ability to use multiple operands with multiple operators
    if (operatorClick === undefined) {
        firstOperand = Number(display.textContent)
        operatorClick = 1;
        display.textContent = operatorSign
        }
    else if (operatorClick === 1) {
         if (Number(display.textContent)) {
         secondOperand = Number(display.textContent);
         firstOperand = display.textContent = operate(firstOperand, secondOperand, operator)
         }
    display.textContent = operatorSign
    }
    arr = [];
    operator = operatorSign;
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
plus.addEventListener("click", () => {clickHandler("+")})
minus.addEventListener("click", () => {clickHandler("-")})
divide.addEventListener("click", () => {clickHandler("/")})
multiply.addEventListener("click", () => {clickHandler("*")})
// eventListener for Equals
equals.addEventListener("click", () => {
    if (firstOperand === undefined) {return}
    if (equalClick === undefined && Number(display.textContent)) {
    secondOperand = Number(display.textContent)
    firstOperand = display.textContent = operate(firstOperand, secondOperand, operator)
    arr = []
    operatorClick = undefined;
    equalClick = 1;
    } else {return}
})
// eventListener for Clear
clear.addEventListener("click", () => {
    firstOperand = undefined;
    secondOperand = undefined;
    operator = undefined;
    equalClick = undefined;
    operatorClick = undefined;
    arr = [];
    display.textContent = ""
})
// evenListener for del
del.addEventListener("click", () => {
    arr.pop();
    display.textContent = arr.join("")
})
// Keyboard Support

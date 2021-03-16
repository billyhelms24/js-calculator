let valDisplay = "";
let valTemp = "";
let arithmetic = [];

const display = document.querySelector("#display");
const numpad = document.querySelectorAll(".num-btn");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const ops = document.querySelectorAll(".op-btn");
const decimal = document.querySelector("#decimal");

function add(val1, val2) {
    return parseFloat((val1 + val2).toFixed(4));
}

function subtract(val1, val2) {
    return parseFloat((val1 - val2).toFixed(4));
}

function divide(val1, val2) {
    return parseFloat((val1 / val2).toFixed(4));
}

function multiply(val1, val2) {
    return parseFloat((val1 * val2).toFixed(4));
}

function operate(val1, val2, op) {
    if (op == "divide") {
        return divide(val1, val2);
    } else if (op == "multiply") {
        return multiply(val1, val2);
    } else if (op == "add") {
        return add(val1, val2);
    } else if (op == "subtract") {
        return subtract(val1, val2);
    }
}

numpad.forEach((btn) => {
    btn.addEventListener("click", () => {
        valDisplay += btn.innerHTML;
        display.innerHTML = valDisplay;
    });
});

ops.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (arithmetic.length == 0 || arithmetic.length % 2) {
            arithmetic.push(valDisplay);
            arithmetic.push(btn.getAttribute("value"));
            valDisplay = "";
            display.innerHTML = valDisplay;
        } else {
            arithmetic[arithmetic.length - 1] = btn.getAttribute("value");
            console.log(arithmetic);
        }
    });
});

equals.addEventListener("click", () => {
    if (arithmetic.length) {
        arithmetic.push(valDisplay);
        console.log(arithmetic);
        valTemp = operate(
            parseFloat(arithmetic[0]),
            parseFloat(arithmetic[2]),
            arithmetic[1]
        );
        valDisplay = valTemp;
        display.innerHTML = valDisplay;
        valTemp = "";
        arithmetic = [];
    } else {
        return;
    }
});

clear.addEventListener("click", () => {
    arithmetic = [];
    valTemp = "";
    valDisplay = "";
    display.innerHTML = valDisplay;
});

del.addEventListener("click", () => {
    valDisplay = valDisplay.slice(0, -1);
    display.innerHTML = valDisplay;
});

decimal.addEventListener("click", () => {
    if (valDisplay.includes(".")) {
        return;
    } else {
        valDisplay += ".";
    }
    display.innerHTML = valDisplay;
});

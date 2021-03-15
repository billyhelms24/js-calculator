let valT = "";
let valDisplay = "";
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

function numBtnClick(val) {
    valT += val;
    display.innerHTML = valT;
}

numpad.forEach((btn) => {
    btn.addEventListener("click", () => {
        numBtnClick(btn.innerHTML);
    });
});

ops.forEach((btn) => {
    btn.addEventListener("click", () => {
        arithmetic.push(valT);
        valT = "";
        display.innerHTML = valT;
        arithmetic.push(btn.getAttribute("value"));
    });
});

equals.addEventListener("click", () => {
    if (arithmetic.length) {
        arithmetic.push(valT);
        console.log(arithmetic);
        valDisplay = operate(
            parseFloat(arithmetic[0]),
            parseFloat(arithmetic[2]),
            arithmetic[1]
        );
        valT = valDisplay;
        display.innerHTML = valDisplay;
        arithmetic = [];
    } else {
        return;
    }
});

clear.addEventListener("click", () => {
    arithmetic = [];
    valDisplay = "";
    valT = "";
    display.innerHTML = valT;
});

del.addEventListener("click", () => {
    valT = valT.slice(0, -1);
    display.innerHTML = valT;
});

decimal.addEventListener("click", () => {
    if (valT.includes(".")) {
        return;
    } else {
        valT += ".";
    }
    display.innerHTML = valT;
});

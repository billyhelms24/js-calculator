let valDisplay = "";
let stack = [];

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
        if (stack.length == 0) {
            valDisplay += btn.innerHTML;
            stack.push(valDisplay);
            valDisplay = "";
            display.innerHTML = stack[stack.length - 1];
        } else if (stack.length % 2) {
            stack[stack.length - 1] += btn.innerHTML;
            display.innerHTML = stack[stack.length - 1];
        } else {
            valDisplay += btn.innerHTML;
            stack.push(valDisplay);
            valDisplay = "";
            display.innerHTML = stack[stack.length - 1];
        }
    });
});

ops.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (stack.length == 0) {
            console.log(stack);
            return;
        } else if (stack.length % 2) {
            stack.push(btn.getAttribute("value"));
            console.log(stack);
            display.innerHTML =
                stack[stack.length - 2] + " " + stack[stack.length - 1];
        } else {
            stack[stack.length - 1] = btn.getAttribute("value");
            console.log(stack);
            display.innerHTML =
                stack[stack.length - 2] + " " + stack[stack.length - 1];
        }
    });
});

equals.addEventListener("click", () => {
    if (stack.length == 0) {
        return;
    } else if (stack.length % 2) {
        valDisplay = parseFloat(eval(stack.join("")).toFixed(4));
        stack = [];
        stack.push(valDisplay);
        valDisplay = "";
        display.innerHTML = stack[0];
    } else {
        return;
    }
});

clear.addEventListener("click", () => {
    stack = [];
    valDisplay = "";
    display.innerHTML = valDisplay;
});

del.addEventListener("click", () => {
    if (stack.length == 0) {
        console.log(stack);
        return;
    } else if (stack.length % 2) {
        stack[stack.length - 1] = stack[stack.length - 1].slice(0, -1);
        display.innerHTML = stack[stack.length - 1];
    } else {
        console.log(stack);
        return;
    }
});

decimal.addEventListener("click", () => {
    if (stack.length == 0) {
        valDisplay += "0.";
        stack.push(valDisplay);
        valDisplay = "";
        display.innerHTML = stack[0];
    } else if (stack.length % 2) {
        if (stack[stack.length - 1].includes(".")) {
            return;
        } else {
            stack[stack.length - 1] += ".";
            display.innerHTML = stack[stack.length - 1];
        }
    } else {
        console.log(stack);
        return;
    }
});

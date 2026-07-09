const display = document.getElementById("display");
const keypad = document.querySelector(".keys");
let expression = "";

function updateDisplay(value) {
    display.textContent = value || "0";
}

function calculate() {
    if (!expression) {
        return;
    }

    try {
        if (!/^[\d+\-*/.()\s]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        const result = Function(`"use strict"; return (${expression})`)();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        expression = String(result);
        updateDisplay(expression);
    } catch {
        expression = "";
        updateDisplay("Error");
    }
}

keypad.addEventListener("click", function (event) {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    if (button.dataset.action === "clear") {
        expression = "";
    } else if (button.dataset.action === "delete") {
        expression = expression.slice(0, -1);
    } else if (button.dataset.action === "calculate") {
        calculate();
        return;
    } else {
        expression += button.dataset.value;
    }

    updateDisplay(expression);
});

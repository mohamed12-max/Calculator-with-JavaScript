
let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    display.style.color = "white";
    display.style.fontSize = "5rem";
}

function calculate() {
    try {
    let result = eval(display.value);

    if (result === Infinity || result === -Infinity) {
        display.value = "Can't divide by zero";
        display.style.color = "red";
        display.style.fontSize = "3rem";
    } else if (isNaN(result)) {
        display.value = "Invalid input";
    } else {
        display.value = result;
    }
    } catch (error) {
        display.value = "Error";
    }
}
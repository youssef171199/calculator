


function append(value) {

    const display = document.getElementById("display");
    display.value += value;
}

function clr() {
    display.value = ""
}

function calc() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}
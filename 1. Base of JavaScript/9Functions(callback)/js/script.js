"use strict";

let num = 20; // global variable

// Function declaration
function showFirstMessage(text) {
    console.log(text);
    // let num = 20; // local variable
    // num = 10;
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
    return a + b;
}

function ret() {
    let num = 50;

    //===============

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function expression

const logger = function () {
    console.log("Hello");
};

logger();

// Function callback don'n have context this

const calc = (a, b) => {
    console.log("1");
    return a + b;
};

"use strict";

const box = document.getElementById("box");

console.log(box); // HTMLCollection

const btns = document.getElementsByTagName("button"); // psevdomassiv don't have methods

console.log(btns[0]); // HTMLCollection

const circles = document.getElementsByClassName("circle"); // don't have methods
console.log(circles); // HTMLCollection

const hearts = document.querySelectorAll(".heart"); // have only one methods forEach()

console.log(hearts); // NodeList

hearts.forEach((item) => {
    console.log(item);
});

const oneHeart = document.querySelector(".heart"); // first element
console.log(oneHeart);

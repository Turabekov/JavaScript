"use strict";

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("I am full");
// }

// console.log(hamburger && fries);
//============================================================
// const hamburger = 3;
// const fries = 2;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0); // 0 => false
// console.log(1 && 5); // 5 => true
// console.log(null && 5);
// console.log(0 && "dsfdsgds");

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("All full!");
// } else {
//     console.log("We leave!");
// }

//===================================================================
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
    console.log("All full!");
} else {
    console.log("We leave!");
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)); // Answer: 2

let johnReport,
    alexReport,
    samReport,
    mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);
//=========================================================================

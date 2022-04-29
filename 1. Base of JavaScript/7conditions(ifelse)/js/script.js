"use strict";

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Many");
} else {
    console.log("OK!");
}

num === 50 ? console.log("OK!") : console.log("Error"); // ternar operator

const number = 50;
switch (number) {
    case 49:
        console.log("Error");
        break;
    case 100:
        console.log("A lot");
        break;
    case 50:
        console.log("Ok!");
        break;
    default:
        console.log("Not this time");
        break;
} // Redux

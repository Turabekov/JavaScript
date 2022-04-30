"use strict";

// Strings and methods=============================================================
const str = "teSt";
const arr = [1, 2, 4];
// console.log(arr.length);

// console.log(str.length);
// console.log((str[2] = "d"));

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q")); // -1

const logg = "Hello World!";
const surname = "Turabekov";
const bek = surname.slice(4, 9);
console.log(bek);

// console.log(logg.slice(6, 12));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 12));

// console.log(logg.substr(5, 6));

//=====Numbers=========================================================================
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";

console.group(parseInt(test)); // 12 = string => number
console.group(parseFloat(test)); // 12.2

"use strict";

// ! new RegExp("pattern", "flags");

// ! /pattern/f

const ans = prompt("Enter numbers");

const reg = /\d/g;
console.log(ans.match(reg)); // we get array

const str = "My name is R2D2";

console.log(str.match(/\D/gi));

// \D => search all not numbers
// \W => search all not words
// \s => search not spaces

// \d => search all numbers
// \w => search all words
// \s => search spaces

// * flags
// ? i => register
// ? g => global
// ? m =>

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));

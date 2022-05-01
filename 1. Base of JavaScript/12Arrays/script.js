"use strict";

const arr = [14, 23, 7, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;

// console.log(arr.length); // ? length = (indexof Last elment) + 1
// console.log(arr);

arr.forEach(function (item, index, arr) {
    console.log(`${index}: ${item} inside of array ${arr}`);
});

//===============================================================================
// * arr.pop(); // remove last element of array
arr.push(10); // * add new last elemnt

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// ! this loop work only with array and here we can use break and continue
for (let value of arr) {
    console.log(value);
}
//=====================================================================================

const str = "apple, banana, akiwi";
const products = str.split(", "); // ! split from string => array
console.log(products);
products.sort();
console.log(products.join("; ")); // ! join from array => string

"use strict";

// ? filter return new array with some conditions you give

// const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// ? map return new array with changing old

// const answers = ["IvAn", "AnnA", "HEEllo"];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);

// ? every/some return boolean true/false

// const someArr = [4, "qwq", "sdfdf"];

// console.log(someArr.some((item) => typeof item === "number")); // true
// console.log(someArr.every((item) => typeof item === "number")); // false

// ? reduce

const arr = [4, 5, 1, 3, 2, 6];

//                      0      4
//                      4       5
//                      9       1
//                      10      3
//                      ....    .....
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

// const arr = ["banana", "kiwi", "watermelon"];

// //                      0      4
// //                      4       5
// //                      9       1
// //                      10      3
// //                      ....    .....
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal",
};

const newArr = Object.entries(obj) // * Object => Array in Array
    .filter((item) => item[1] === "persone")
    .map((item) => item[0]);
console.log(newArr);

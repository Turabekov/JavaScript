"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }

    console.log(i);
}

const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];

// Пишем решение вот тут
let j = 0;
for (let i = data.length - 1; i >= 0; i--) {
    result[j] = data[i];
    j++;
}
console.log(result);

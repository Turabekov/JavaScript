"use strict";

// const obj = new Object();

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
    },
};

// console.log(options.name);

// delete options.name;

// console.log(options);
let counter = 0;
for (let key in options) {
    if (typeof options[key] === "object") {
        for (let i in options[key]) {
            console.log(`Property ${i} have value ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} have value ${options[key]}`);
    }
    counter++;
}
// for ... of don't work with objects
// console.log(counter);

//==Properties And Methods===========================================================================
const mersedesBenz = {
    model: "GLS900",
    motor: 2000,
    year: 2022,
    option: {
        autorider: true,
        electro: true,
    },
    makeTest: function () {
        // methods
        console.log("Test");
    },
};

// mersedesBenz.makeTest();

// console.log(Object.keys(mersedesBenz).length); // we can get length of object

// console.log(Object.keys(options).length);

//====Destructiration of Objects============================================================================

const { autorider, electro } = mersedesBenz.option;
console.log(autorider);
console.log(electro);

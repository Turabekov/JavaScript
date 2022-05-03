"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 200,
    sayHello: function () {
        console.log("Hello");
    },
};

const john = Object.create(soldier); // ! we create prototype just parallel with creating new Object

// const john = {
//     health: 100,
// };

//  john.__proto__ = soldier; // ! this is old format of using prototype

// ! Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

john.sayHello();

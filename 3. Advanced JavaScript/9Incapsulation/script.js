"use strict";

// ! function constructor incapsulation
// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Name of user: ${this.name}, age ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === "number" && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("Undefined value!!!");
//         }
//     };
// }

// const ivan = new User("Ivan", 27);

// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// // ivan.name = "Alex";

// ivan.say();

// ! Incapsukation in Classes

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = "Petrychenko";

    get surname() {
        return this.#surname;
    }

    set surname(str) {
        this.#surname = str;
    }

    say() {
        console.log(
            `Name of user: ${this.name} ${this.#surname}, age ${this._age}`
        );
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("Undefined value!!!");
        }
    }
}

const ivan = new User("Xumoyun", 27);

console.log(ivan.surname);
console.log((ivan.surname = "Turabekov"));

ivan.say();

"use strict";

//=======================================================================
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5); // * Window without use strict (undefined with use strict)
//=======================================================================
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this); // object
//         function shout() {
//             console.log(this); // undefined
//         }
//         shout();
//     },
// };

// obj.sum();

//=======================================================================

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User("Ivan", 28);

//=======================================================================

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: "John",
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(13));

// ! 1) Обычная функция: this = window, но если use strict - undefined
// ! 2) Контекст у методов обьекта - сам обьект
// ! 3) this  в консьрукторах и классах - это новый экземпляр обьекта
// ! 4) Ручная привязка this: call, apply, bind

//==============================================================================

const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     this.style.backgroundColor = "red";
//     console.log(this); // ! this = e.target
// });

btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "red";
    // this.style.backgroundColor = "red";
    // console.log(this); // ! this = undefined
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num); // object
        };
        say();
    },
};
obj.sayNumber();

const double = (a) => a * 2;

console.log(double(4));

"use strict";

const persone = {
    name: "Alex",
    tel: "+7333333",
    parents: {
        mom: "Olga",
        dad: "Ivan",
    },
};

console.log(JSON.stringify(persone)); // * object => JSON format
console.log(JSON.parse(JSON.stringify(persone))); // * JSON format => simple object format

// ? deep copy objects
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "Masha";
console.log(persone);
console.log(clone);

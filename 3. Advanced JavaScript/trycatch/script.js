"use strict";

try {
    console.log("Normal");
    console.log(a);
    console.log("result");
} catch (e) {
    console.log(e.name);
    console.log(e.message);
} finally {
}

// ! console.log(a);    error

console.log("Still normal");

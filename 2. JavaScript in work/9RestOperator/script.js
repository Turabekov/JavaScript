// ! rest - оставшиеся элементы

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log("basic", "rest", "operator", "usage");
// ? basic rest [ 'operator', 'usage' ]

function calclOrDouble(number, basis = 2) {
    // basis = basis || 2 old format
    console.log(number * basis);
}

calclOrDouble(3);

("use strict");

function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);

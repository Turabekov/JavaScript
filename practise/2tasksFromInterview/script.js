// ? 1) • Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5;
// alert(x++);
// * 5

// ? 2) • Чему равно такое выражение: [ ] + false - null + true ?

console.log([] + false - null + true);
// * NaN

// ? 4) • Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let x = (y = 2);
alert(x);

// * 2

// ? 5) • Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2);
// * 12

// ? 6) • Что выведет этот код: alert( "1"[0] )?
alert("1"[0]);
console.log("1"[1]); // undefined
// * 1

// ? 7) • Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined);
// * null

// ? 8) • Есть ли разница между выражениями? !!( a && b ) и (a && b)?
//            bool     !=       2
console.log(!!(1 && 2) === (1 && 2));
// * false

// ? 9) • Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

alert(null || (2 && 3) || 4);
// * 3

// ? 10) • a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b);
// * false

// ? 11) • Что выведет этот код: alert( +"Infinity" ); ?
alert(+"Infinity");
// * number => Infinity

// ? 12) • Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");
// * false

// ? 13) • Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || false);
// * 2

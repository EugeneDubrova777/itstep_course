// function sum(a, b = 10) {
//   // console.log(a + b);
//   let result = a + b;
//   return result;
// }

// let number1 = 2;
// let number2 = 3;

// console.log(sum(number1));


//1
function lessNum(a, b) {
  return a < b ? a : b;
}

console.log(lessNum(99, 77));
console.log(lessNum(33, 45));
console.log(lessNum(6, 4));

console.log(' ');

//2
function step(a, b) {
  return a ** b;
}

console.log(step(2, 4));
console.log(step(3, 2));
console.log(step(5, 3));

console.log(' ');

//3
function calc(a, b, n) {
  return `${a} ${n} ${b}`;
}

console.log(calc(5, 5, '/'));  // сделать калькулятор
let sum = (a, b) => a + b;
let mul = (a, b) => a * b;

let c = mul(sum(5, 6), 7);
console.log(`hello ${c}`);

let show = i => console.log(i);

let cycle = (counter, func) => {
  if (counter < 0) {
    return;
  } else {
    func(counter);
    counter--;
    cycle(counter, func);
  }
}

cycle(10, show);

let mass = [12, 5, 76, -34, 4, 56];
let newMass = [];

// for (let i = 0; i < mass.length; i++) {
//   newMass.push(mass[i] * 2);
// }

newMass = mass.map(function(item) {
  return item * 2;
});

console.log(newMass);


let newArr = [];
let newArr2 = [];

for (let i = 0; i < mass.length; i++) {
  if (mass[i] < 0) {
    newArr.push(mass[i]);   
  }
}
console.log(newArr);

for (let i = 0; i < mass.length; i++) {
  if (mass[i] % 2 == 0) {
    newArr2.push(mass[i]);
  }
}
console.log(newArr2);

function fucktorial(num) {
  let res = 1
  if (num == 1 || num == 0)  {
    return res;
  }
  if (num > 1) {
    res = num * fucktorial(num - 1);
  }
  return res;
}

console.log(fucktorial(4));

let filtered = [];

let conditionNegative = (n) => {
  return n < 0;
}

let conditionOdd = (n) => {
  return n % 2 == 0;
}

// filtered = mass.filter(el => conditionNegative(el));

let filter = (arr, condition) => {
  let res = [];
  arr.forEach((el) => {
    if(condition(el)) res.push(el);
  });
  return res;
}

console.log(filter(mass, conditionNegative));
console.log(filter(mass, conditionOdd));



let cart = [
  {
    name: 'Pasta',
    count: 2,
    prise: 120
  },
  {
    name: 'Schetka',
    count: 4,
    prise: 19
  },
  {
    name: 'Hat',
    count: 2,
    prise: 400
  }
];

let fullPrise = cart.reduce((acc, el) => {
  acc += el.prise * el.count;
  return acc;
}, 0);
let fullCount = cart.reduce((acc, el) => {
  acc += el.count;
  return acc;
}, 0);

// for (let i = 0; i < cart.length; i++) {
//   fullPrise += cart[i].prise * cart[i].count;
//   fullCount += cart[i].count;
// }

// for (let item of cart) {
//   fullPrise += item.prise * item.count;
//   fullCount += item.count;
// }

// cart.forEach((el) => {
//   fullPrise += el.prise * el.count;
//   fullCount += el.count;
// })


console.log(fullPrise);
console.log(fullCount);

// iife
(function() {
  console.log('123');
})();





// let user = {
//   adress: 'ddd'
// }

// console.log(user?.adress?.street);



let time = new Date('2026-02-17');
time = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365);
console.dir(time);


let m = new Map();
m.set("1", "str1"); 

let o = {
  prop: "Prop",
  name: "John",
  age: 123
}

m.set(o, "fo");
console.log(m);

// for(let key in o) {
//   console.log(key);
// }

for(let key of Object.keys(o)) {
  console.log(key);
}
for(let key of Object.values(o)) {
  console.log(key);
}
for(let key of Object.entries(o)) {
  console.log(key);

  let [keyName, keyValue] = key;
  // let keyName = key[0];
  // let keyValue = key[1];

  console.log(keyName);
  console.log(keyValue);
}

let arr = ["3", "1", "2", "3"];
console.log(arr);
let set = new Set(arr);
console.log(set);


// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter1 = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter1());
// console.log(counter());






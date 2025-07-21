// let n = +prompt('enter n');
// let m = +prompt('enter m');

// if(n == 0) {
//   console.log('result is 0');
// }

// if(n == 1) {
//   console.log('result is 1');
// }

// if(n > 1) {
//   let result = n ** m;
//   console.log(`result is ${result}`);
// }


// if(n >= 0) {
//   let result = n ** m;
//   console.log(`result is ${result}`);
// } else {
//   console.log('fuck!');
// }


// if(n == 0) {
//   console.log('result is 0');
// } else if(n == 1) {
//   console.log('result is 1');
// } else {
//   console.log('fuck!');
// }


// let a = null;
// console.log(a == 0);
// console.log(a === 0);


// if(n <= 5 && n >= 10 && n != 4) {
//   if (m <= 2 || m >=4) {
//     let result = n ** m;
//     console.log(`result is ${result}`);
//   }
// }


// let nameOfJS = prompt('enter right name of JS!!');

// if(nameOfJS == 'ECMAscript') {
//   console.log('Right');
// } else {
//   console.log('Not Right!!!');
// }


// let number = +prompt('enter number!!');

// if(number > 0) {
//   console.log(1);
// } else if(number < 0) {
//   console.log(-1);
// } else if(number == 0) {
//   console.log(0);
// }


// task2
let numOfYears = -66;
if(numOfYears <= 0 || numOfYears > 120) {
  console.log('2. Not Right')
}

// task3
let num3 = 55;
if(num3 > 0) {
  console.log(num3);
} else if(num3 < 0) {
  console.log(-num3);
} else {
  console.log(0);
}

// task4
let hours = 32;
let mins = 43;
let secs = 56;

if((hours < 0 || hours > 24) && (mins < 0 || mins > 60) && (secs < 0 || secs > 60)) {
  console.log(`4. You're right!`);
} else {
  console.log(`4. You're not right`);
}

//task5
let month = 9;

switch(month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;
  case 5:
    console.log('May');
    break;
  case 6:
    console.log('June');
    break;
  case 7:
    console.log('July');
    break;
  case 8:
    console.log('August');
    break;
  case 9:
    console.log('September');
    break;
  case 10:
    console.log('October');
    break;
  case 11:
    console.log('November');
    break;
  case 12:
    console.log('December');
    break;
  default:
    console.log('No month!');
}


// task6

let n1 = 43;
let n2 = 4;
let mmm = '/';

switch(mmm) {
  case '+':
    console.log(n1 + n2);
    break;
  case '-':
    console.log(n1 - n2);
    break;
  case '*':
    console.log(n1 * n2);
    break;
  case '/':
    console.log(n1 / n2);
    break;
  default:
    console.log('Noooo!');
}



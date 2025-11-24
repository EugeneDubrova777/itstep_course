// function loadScript(url, callback) {
//   let script = document.createElement('script');
//   script.src = url;
//   script.onload = () => {
//     callback()
//   }
//   document.body.append(script);
// }

// loadScript('./js/header.js', () => {
//   createHeader('this is header');
// });

// let a = document.createElement('a');
// a.innerText = 'Link';
// a.href = 'https://google.com';
// document.body.prepend(a);

// let promise = new Promise((resolve, reject) => {
//   let sum = 23;
//   setTimeout(() => {
//     if (sum == 23) {
//       console.log(sum);
//       resolve(sum);
//     } else {
//       console.log('error');
//       let error = new Error('no 23');
//       reject(error);
//     }
//   }, 3000);
// });

// console.log('promise');



let num = 4;

let button = document.querySelector('#btn');
let result = document.querySelector('#result');

button.addEventListener('click', () => {
  result.classList.remove('animated');
  let promise = new Promise((resolve, reject) => {
    let input = document.querySelector('#answer');
    if(input.value == num) {
      resolve('Yes!');
    } else {
      let error = new Error('Noo!');
      reject(error);
    }
  });



  promise.then((message) => {
    result.innerText = message;
    result.classList.add('animated');
    document.body.style.backgroundColor = 'green';
  }).catch((error) => {
    result.innerText = error.message;
    result.classList.add('animated');
    document.body.style.backgroundColor = 'red';
  }).finally(() => {
    num = Math.floor(Math.random() * 10) + 1;
  });  
});
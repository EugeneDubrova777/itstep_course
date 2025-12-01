const inputUsd = document.querySelector('#usd');
const inputByn = document.querySelector('#byn');
const inputEur = document.querySelector('#eur');
const inputCny = document.querySelector('#cny');
let input = document.querySelectorAll('input');


let myHeaders = new Headers();
myHeaders.append("apikey", "3dU3wcMVomPijQDOzY4RwjuY8aZ0xmNk");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const coursesObj = {
  USD: 1,
  BYN: 3,
  CNY: 7,
  EUR: 0.8
}

let usd = 1;
let byn = coursesObj.BYN * usd;
let eur = coursesObj.EUR * usd;
let cny = coursesObj.CNY * usd;


inputUsd.addEventListener('keyup', () => {
  inputByn.value = coursesObj.BYN * inputUsd.value;
  inputEur.value = coursesObj.EUR * inputUsd.value;
  inputCny.value = coursesObj.CNY * inputUsd.value;
});










// fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,BYN,CNY", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result)); 
  
// console.log(result.quotes['USDEUR']));


  





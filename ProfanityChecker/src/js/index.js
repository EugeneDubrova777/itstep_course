import $ from 'jquery';
import '../scss/index.scss';

let message = 'shit';

const res = await fetch('https://vector.profanity.dev', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }),
});

let result = await res.json();
console.log(result);

// function checkWord() {
//   let checker = $('.checker');
//   let checkerHtml = `<div>
//                         <input type="text" size="60">
//                         <button>check!</button>
//                     </div>`;
  
//   checker.append(checkerHtml);
// }

function checkWord() {
  let checker = $('.checker');
  let checkerHtml = `
                      <input id="text1" type="text" cols="40" rows="3">
                      <input id="btn1" type="button" value="Check!">`;
  
  let btn = $('#btn1');
  let text = $('#text1');
  checker.append(checkerHtml);
  btn.click(() => {
    console.log(text.value);
  });
}

{/* <input class="btn" type="submit" value="Check!"></input> */}

checkWord();


// let conn = new XMLHttpRequest();

// conn.onerror = () => {
//   console.log('Fckn Error!');
// }

// conn.onload = function() {
//   if (this.status !== 200) {
//     console.log(`Status ${this.status} error`);
//     return;
//   }
  
//   renderBeerCard(this.response);
// }

// setInterval(() => {
//   conn.open('GET', 'https://punkapi.online/v3/beers/random');
//   conn.responseType = 'json';
//   conn.send();
// }, 3000);

// function renderBeerCard(beer) {
//   let card = $('.beer-card');
//   let beer_product = `<div>
//                         <h3>${beer.name}</h3>
//                         <p>${beer.tagline}</p>
//                         <h4>Since ${beer.first_brewed}</h4>
//                         <img src="https://punkapi.online/v3/images/${beer.image}" alt="">                        
//                       </div>`;
//   card.html(beer_product);
//   console.log(beer);
// }







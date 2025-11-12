import $ from 'jquery';
import '../scss/index.scss';

let conn = new XMLHttpRequest();

conn.onerror = () => {
  console.log('Fckn Error!');
}

conn.onload = function() {
  if (this.status !== 200) {
    console.log(`Status ${this.status} error`);
    return;
  }
  
  renderBeerCard(this.response);
}

setInterval(() => {
  conn.open('GET', 'https://punkapi.online/v3/beers/random');
  conn.responseType = 'json';
  conn.send();
}, 3000);

function renderBeerCard(beer) {
  let card = $('.beer-card');
  let beer_product = `<div>
                        <h3>${beer.name}</h3>
                        <p>${beer.tagline}</p>
                        <h4>Since ${beer.first_brewed}</h4>
                        <img src="https://punkapi.online/v3/images/${beer.image}" alt="">                        
                      </div>`;
  card.html(beer_product);
  console.log(beer);
}







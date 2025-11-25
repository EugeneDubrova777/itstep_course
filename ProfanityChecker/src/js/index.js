import $ from 'jquery';
import '../scss/index.scss';

// let message = 'shit';

// let conn = new XMLHttpRequest();
// conn.open('POST', 'https://vector.profanity.dev');
// conn.responseType = 'json';
// const formData = new FormData();
// formData.append('message', 'shit')
// conn.send(formData);
// conn.onerror = () => {
//   console.log('Fckn Error!');
// }
// conn.onload = function() {
//   if (this.status !== 200) {
//     console.log(`Status ${this.status} error`);
//     return;
//   }  
//   checkWord(this.response);
// }
onsubmit = 'sendMessage(event)';

window.onmessage = function(event) {
  event.preventDefault();
  const formData = new FormData(document.forms.form);
  formData.append('param', 'Hello');
  let conn = new XMLHttpRequest();
  conn.open('POST', 'https://vector.profanity.dev');
  conn.setRequestHeader('Content-Type', 'application/json');
  let request = JSON.stringify({
    message: formData.get('message'),
    param: formData.get('message')
  });
  conn.send(request);
  conn.onload = function() {
    console.log(this.response);
  }

}

function checkWord(message) {
  let checker = $('.checker');
  let checkerHtml = `<form class="form" id="form" name="form">
  <input id="text1" name="text" type="text" cols="40" rows="3">
  <button id="btn1" type="submit">Check!</button>
  </form>`;
  
  checker.append(checkerHtml);
  
  // $('.form').submit((event) => {
  //   event.preventDefault();
  //   const formData = new FormData(document.forms.form);
  //   console.log(formData.get('text'));
    
  //   if(message.isProfanity == true) {
  //     let h2 = `<h2>You have bad mouth!</h2>`

  //     checker.append(h2);
  //   }

  //   if(message.isProfanity == false) {
  //     let h2 = `<h2>All is OK!</h2>`

  //     checker.append(h2);
  //   } 
  // });
}

checkWord();









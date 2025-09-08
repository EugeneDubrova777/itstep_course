console.log(window);

// function superFunction() {    
//   for (let plugin of window.navigator.plugins) {
//     console.log(plugin.name);
//   }
// }

// superFunction();

// let url = prompt('Enter Url!!!');

// if(confirm(`Are you sure?? ${url}`)) {
//   window.location.href = url;
// }

// function reload() {
//   location.reload()
// }
// setInterval(reload, 10000);

console.dir(document);

document.body.style.backgroundColor = '#aa1122';

let html = document.children[0];
let body = html.children[1];
let h1 = body.children[0];
let text = h1.innerText;
console.log(text);

let link = document.children[0].children[1].children[1].href;
let linkText = document.children[0].children[1].children[1].innerText;
console.log(link);
console.log(linkText);


// let urll = prompt('Enter link!!');
// let urlText = prompt('Enter name of website!!!');

// if(urll === link && urlText === linkText) {
//   location.href = link;
// }

let a = document.createElement('a');
let a1 = document.createElement('a');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');

console.log(a);

a.href = 'https://google.com';
a.innerText = 'google link';
a.classList.add('no-decoration');

a1.href = 'https://github.com';
a1.innerText = 'gh link';

h1.innerText = 'Hello h1';
h2.innerText = 'Hi h2';


let div = document.querySelector('#root');

div.append(a);
div.prepend(a1);
div.before(h1);
div.after(h2);

let texts = ['text1', 'text2', 'text3', 'text4']
let ul = document.createElement('ul');

div.append(ul);

texts.forEach(element => {
  let li = document.createElement('li');
  li.innerText = element;
  ul.append(li);
});

a1.remove();

let h3 = '<h3>Fckn H#3</h3>';
// div.innerHTML = h3;

// div.insertAdjacentHTML('beforeend', h3);
// div.insertAdjacentText('afterbegin', h3);
// div.insertAdjacentElement('afterend', a1);

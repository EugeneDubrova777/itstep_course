let ul = document.body.children[2];

console.dir(ul);
ul.firstElementChild.style.textTransform = 'uppercase';
ul.lastElementChild.style.color = '#ee55ff';

// ul.innerHTML = '<li>1234567</li>';
// ul.innerText = '7654321';

ul.previousElementSibling.style.fontSize = '40px';
ul.parentElement.id = 'body-page';

console.log(ul.getAttribute('id'));
// ul.setAttribute('class', 'superlist');

ul.classList.add('normalized');
ul.classList.add('underlined');
// ul.classList.toggle('normalized');

let block = document.getElementById('flexbox');
block.innerText = 'hello from block';
block.classList.add('border', 'padding', 'd-flex');

let blockClasses = document.getElementsByClassName('example');
block = blockClasses[0];
block.classList.add('padding-10');

block = document.querySelector('.example');
block.classList.remove('padding-10');

blockClasses = document.querySelectorAll('.example');
block = blockClasses[0];
console.log(block);


let h1 = document.querySelector('h1');
h1.classList.add('text-align');

let a = document.querySelector('a');
a.innerHTML = '<img src="https://img1.akspic.ru/previews/1/6/0/6/7/176061/176061-yablochnyj_pejzazh-yabloko-illustracia-prirodnyj_landshaft-purpur-500x.jpg">';

let li = document.querySelectorAll('li');
li[0].style.textAlign = 'left';
li[1].style.textAlign = 'center';
li[2].style.textAlign = 'right';



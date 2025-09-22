let button = document.querySelector('.button');
let nav = document.querySelector('nav');

button.addEventListener('click', function() {
  nav.classList.toggle('animated');
  nav.classList.toggle('transformed');
});

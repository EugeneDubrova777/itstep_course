const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('button');

wrapper.addEventListener('click', (event) => {
  wrapper.style.border = '5px dotted #ae34fa';
  if(event.target.tagName.toLowerCase() == 'button') {
    event.target.classList.toggle('animated');
  }  
});

// button.addEventListener('click', (event) => {
//   event.stopPropagation();
//   wrapper.style.backgroundColor = '#ead123';
//   button.style.animation = 'butt 0.7s linear 2';
// });

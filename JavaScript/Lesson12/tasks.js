// 1

let butt1 = document.querySelector('.butt1');
let butt2 = document.querySelector('.butt2');
let div = document.querySelector('div');

butt1.addEventListener('click', () => {
  div.style.display = 'none';
});

butt2.addEventListener('click', function() {
  this.style.display = 'none';
});


const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

function moveBall(event) {
  let clientX = event.clientX;
  let clientY = event.clientY;

  ball.style.left = clientX - Math.floor(ball.offsetWidth / 2) + 'px';
  ball.style.top = clientY - Math.floor(ball.offsetHeight / 2) + 'px';
}

field.addEventListener('click', moveBall);
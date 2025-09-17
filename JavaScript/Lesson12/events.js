function show1(num1, num2) {
  if (num1 < 0) {
    return;
  } else {
    console.log(`Nums ${num1} & ${num2}`);
    show1(num1 - 1, num2 -13);
  }
}

// function show2(num1, num2) {
//   show1(num1, num2);
// }

// show2(3, 6);


show1(3, 6);

//------------------------------------------------------------------

function showNums(start, end) {
  if (start > end) {
    return;
  } else {
    console.log(start);
    showNums(start + 1, end)
  }
}

showNums(4, 7);

//--------------------------------------------------------------------


function changeLinkText(event) {
  let a = document.querySelector('a');
  a.innerText = 'Butt';
  console.dir(event);
}

let button = document.querySelector('button');

// button.onclick = () => {
//   document.body.style.backgroundColor = '#4ed12a';
// }

button.addEventListener('click', changeLinkText);
button.addEventListener('click', () => {
  document.body.style.backgroundColor = '#4ed12a';
});
// button.addEventListener('mouseover', () => {
//   document.body.style.backgroundColor = '#4ed12a';
// });
// button.addEventListener('mouseout', () => {
//   document.body.style.backgroundColor = '#aaa31a';
// });

// button.removeEventListener('click', changeLinkText);

button.onclick = (event) => {
  console.dir(event.target);
}


// console.dir(button);
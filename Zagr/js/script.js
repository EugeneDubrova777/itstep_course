let block = document.querySelector('.block');

let img = document.createElement('img');
img.src = 'images.png';
img.classList.add('spinner');
img.alt = 'spinner';

let h2 = document.createElement('h2');

block.append(img);

// let promise = new Promise((resolve, reject) => { 
//   let num = 10;
//   setTimeout(() => {
//     if (num > 5) {
//       resolve('Yes!');
//     } else {
//       let error = new Error('Noo!');
//       reject(error);
//     }
//   }, 3000);
// });


// promise.then((message) => {
//   h2.innerText = message;
//   h2.classList.add('text');
//   block.append(h2);
// }).catch((error) => {
//   h2.innerText = error.message;
//   h2.classList.add('text');
//   block.append(h2);
// }).finally(() => {
//   img.remove();
// });




async function load() {
  let num = 1;
  setTimeout(async () => {
    if (num < 5) {
      h2.innerText = 'Yes!';
      h2.classList.add('text');
      block.append(h2);
      img.remove();
    } else {
      let error = new Error('Noo!');
      h2.innerText = error.message;
      h2.classList.add('text');
      block.append(h2);
      img.remove();
      throw error;
    }
    let result = await load();
    return result;
  }, 3000);
}

load();



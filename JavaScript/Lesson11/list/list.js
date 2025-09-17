let div = document.getElementById('root');

// let ul = document.createElement('ul');

// div.append(ul);

// let text;
// while(text = prompt('enter li')) {
//   let li = document.createElement('li');
//   li.innerText = text;
//   ul.append(li);
// }


let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {
      "rrr": {},
      "ttt": {
        "OOOOO": {},
        "pppppp": {}
      },
    }
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function newCreateTree(container, data) {
  let ul = document.createElement('ul');

  for(let key in data) {
    let li = document.createElement('li');
    li.innerText = key;

    if(data[key]) {
      newCreateTree(li, data[key]); 
    }

    ul.append(li);
  }

  container.append(ul);
}

newCreateTree(div, data);

let ul = document.createElement('ul');

function createTree(container, obj) {
  for(let key in obj) {
    let li = document.createElement('li');
    li.innerText = key;
    if(obj[key]) {
      let ulInner = document.createElement('ul');
      for(let key1 in obj[key]) {
        let li1 = document.createElement('li');
        li1.innerText = key1;
        if(obj[key][key1]) {
          let ulInner2 = document.createElement('ul');
          for(let key2 in obj[key][key1]) {
            let li2 = document.createElement('li');
            li2.innerText = key2;
            ulInner2.append(li2);
          }
          li1.append(ulInner2);
        }
        ulInner.append(li1);
      }
      li.append(ulInner);
    }
    ul.append(li);
  }
  container.append(ul);
}

createTree(div, data);





function showNotification(options) {
  let div = document.createElement('div');
  div.classList.add('notification');

  if(options.className) {
    div.classList.add(options.className);
  }

  div.style.top = options.top + 'px';
  div.style.right = options.right + 'px';
  div.innerText = options.html;
  document.body.prepend(div);

  setTimeout(() => {
    div.classList.add('hide');
    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 1500);
}

showNotification(
  {
    top: 150,
    right: 170,
    html: "Hello!",
  }
);

function notify() {
  let top = randomizer(0, 200);
  let right = randomizer(0, 1000);
  showNotification(
    {
      top: top,
      right: right,
      html: "Hello!",
    }
  );
}

function randomizer(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

setInterval(notify, 1000);
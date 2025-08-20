// function user(name, age) {
//   return {
//     name: name,
//     age: age,
//   }
// }
// console.log(user('Ivan', 77));

function User(name, age) {
  this.firstname = name;
  this.age = age;
  this.hello = function() {
    console.log(`Hello ${this.firstname}`);
  }
}

let ivan = new User('Ivan', 77);
console.log(ivan);
ivan.hello();


// // <div class="block"></div>
// let div = {
//   name: 'div',
//   attribute: {
//     name: 'class',
//     value: 'block',
//   },
//   innerHtml: '',
// }

// // <a href="https://google.com">link</a>
// let a = {
//   name: 'a',
//   attribute: {
//     name: 'href',
//     value: 'https://google.com',
//   },
//   innerHtml: 'link',
// }

// // <input type="text" />
// let input = {
//   name: 'input',
//   attribute: {
//     name: 'type',
//     value: 'text',
//   },
//   innerHtml: null,
// }

// class HTMLElement {
//   constructor(name) {
//     this.name = name;
//     this.attribute = null;
//     this.innerHtml = null;
//   }
//   setInnerHtml(innerHtmlValue) {
//     this.innerHtml = innerHtmlValue;
//   }
//   setAttribute(attributeValue) {
//     this.attribute = attributeValue;
//   }
//   renderHtml() {
//     return `<${this.name} ${this.attribute.name}="${this.attribute.value}"></${this.name}>`
//   }
// }

// let div = new HTMLElement('div');
// div.setInnerHtml('');
// div.setAttribute({name: 'class', value: 'block'});
// console.log(div);

// let a = new HTMLElement('a');
// a.setInnerHtml('link');
// a.setAttribute({name: 'href', value: 'https://google.com'});
// console.log(a);

// let input = new HTMLElement('input');
// input.setInnerHtml(null);
// input.setAttribute({name: 'type', value: 'text'});
// console.log(input);

// console.log(a.renderHtml())


function HTMLElement(name, attribute, innerHtml) {
  this.name = name;
  this.attribute = attribute;
  this.innerHtml = innerHtml;
  this.renderHtml = () => {
    if (this.attribute == null || this.attribute.name == undefined || this.attribute.value == undefined) {
      return `<${this.name}>${this.innerHtml}</${this.name}>`;
    }
    return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtml}</${this.name}>`;
  }
  this.addToPage = function() {
    document.body.insertAdjacentHTML('beforeend', this.renderHtml());
  }
}

const div = new HTMLElement('div', {name: 'class', value: 'block'}, 'f');
console.log(div);
console.log(div.renderHtml());
div.addToPage();

const a = new HTMLElement('a', {name: 'href', value: 'https://google.com'}, 'link');
console.log(a);
console.log(a.renderHtml());
a.addToPage();

const p = new HTMLElement('p', {}, 'lorem ipsevgfd;lgjf;s  fdgdfs');
console.log(p.renderHtml());



function Calc(num1, num2) {
  this.read = function() {
    return `${num1} ${num2}`;
  }
  this.sum = function() {
    return num1 + num2;
  }
  this.mul = function() {
    return num1 * num2;
  }
}

let calculator = new Calc(4, 8);
console.log(calculator);
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());


function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function(n) {    
    let num = n;
    this.value += num;
  }
}

let accumulator = new Accumulator(1);
accumulator.read(12);
accumulator.read(10);

console.log(accumulator.value);
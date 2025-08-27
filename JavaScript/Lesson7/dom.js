class HTMLElement {
  constructor(name) {
    this.name = name;
    this.id = null;
    this.style = {};
    this.classList = {
      classes: [],
      add(...classNames) {
        for(let className of classNames) {
          this.classes.push(className);
        }
      },
      delete(...classNames) {
        for(let className of classNames) {
          let index = this.classes.indexOf(className);
          if(index > -1) {
            this.classes.splice(index, 1);
          }
        }
      }
    };
  }

  renderHTML() {
    return `<${this.name}${this.getClassList()}${this.getStylesList()}></${this.name}>`;
  }

  getClassList() {    
    return this.classList.classes.length > 0 ? ` class="${this.classList.classes.join(' ')}"` : '';
  }

  addStyle(name, value) {
    this.style[name] = value;
  }

  getStylesList() {
    let styles = ''
    for(let key of Object.keys(this.style)) {
      let styleName = key;
      let styleValue = this.style[key];

      let styleString = `${styleName}:${styleValue};`;
      styles += styleString;
    }

    return styles ? ` style="${styles}"` : '';    
  }

  drawHTML() {
    document.body.insertAdjacentHTML('afterbegin', this.renderHTML());
  }
} 

class HTMLHrefElement extends HTMLElement {
  constructor(href) {
    super('a');
    this.href = href;
  }
}

const div = new HTMLElement('div');
const a = new HTMLHrefElement('https://google.com');
div.id = 'block';
a.id = 'external_link';
div.classList.add('container', 'section', 'color');
div.classList.delete('color');
div.addStyle('width', '700px');
div.addStyle('height', '100vh');
div.addStyle('background-color', 'red');


console.log(div);
console.log(a);
div.drawHTML();
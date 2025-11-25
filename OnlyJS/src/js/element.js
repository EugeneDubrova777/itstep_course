class Element {
  constructor(element) {
    this.name = element;
    this.id = '';
    this.classes = [];
    this.children = [];
    this.css = {};
  }
  setId(id) {
    this.id = id;
  }
  addClasses(...classes) {
    this.classes = [...this.classes, ...classes];
  }
  removeClasses(...classes) {
    for (let c of classes) {
      let index = this.classes.indexOf(c);
      if (index != -1) {
        this.classes.splice(index, 1);
      }
    }
  }

  addStyles(styles) {
    Object.assign(this.css, styles);
  }

  deleteStyles(...styles) {
    for (let key of styles) {
      delete this.css[key];
    }
  };

  appendChildren(...childs) {
    for (let c of childs) {
      this.children.push(c);
    }
  }

  createDomElement() {
    const el = document.createElement(this.name);

    if (this.id) {
      el.id = this.id;
    }

    for (let c of this.classes) {
      el.classList.add(c);
    }

    for (let key in this.css) {
      el.style[key] = this.css[key];
    }

    for (let child of this.children) {
      el.append(child.createDomElement())
    }

    return el;
  }
}

export default Element;
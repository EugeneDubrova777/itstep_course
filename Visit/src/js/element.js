class Element {
  constructor(element) {
    this.name = element;
    this.id = '';
    this.classes = [];
    this.children = [];
    this.css = [];
  }
  setId(id) {
    this.id = id;
  }
  addClasses(...classes) {
    // for (let class1 of classes) {
    //   this.classes.push(class1);
    // }
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

  render(parent) {
    const el = document.createElement(this.name);
    el.id = this.id;
    for (let c of this.classes) {
      el.classList.add(c);
    }
    parent.append(el);
  }

}

export default Element;
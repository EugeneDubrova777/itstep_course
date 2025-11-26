import Element from "./element";
import ImageElement from "./image";

document.body.style.backgroundColor = 'green'

const div = new Element('div');

div.setId('main');

div.addStyles({
  border: '3px solid black',
  backgroundColor: '#1b3f1c',
  width: '80%',
  margin: '0 auto',
  padding: '40px'
});

const img = new ImageElement('img');
img.setSrc('../src/img/frankenstein-masker-deluxe.jpg');
img.setAlt('avatar');

img.addStyles({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  border: '3px solid green'
});

const link1 = new Element('a');
const link2 = new Element('a');
const link3 = new Element('a');

div.appendChildren(img);

document.body.prepend(div.createDomElement());








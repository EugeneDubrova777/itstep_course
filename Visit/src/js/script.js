import Element from "./element";
import ImageElement from "./image";

const el = new Element('div');

el.setId('block');
el.addClasses('border', 'flex');

el.addStyles({
  width: '100px',
  height: '120px',
  border: '5px solid black',
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const link = new Element('a');
const img = new ImageElement('img');

img.setSrc('https://media.istockphoto.com/id/1419008265/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%80%D1%83%D0%BA%D0%B0-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=HTbNQQa14td0RLS6V0vzBEZ1tk_1kp4KaUcIlVY1q7Q=');

img.addStyles({
  width: '100%',
  opacity: 0.7
});

img.setAlt('');

link.appendChildren(img);
el.appendChildren(link);
console.log(el);


document.body.append(el.createDomElement());

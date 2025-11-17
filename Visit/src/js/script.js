import Element from "./element";

const el = new Element('div');

el.setId('block');
el.addClasses('border', 'flex');
el.removeClasses('border');

el.render(document.body);

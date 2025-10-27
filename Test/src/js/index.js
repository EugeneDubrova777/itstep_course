const _ = require('lodash');
const $ = require('jquery');
const alertModule = require('../js/alert');

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
alertModule.myFunction('Heelo');

// $('body').css({backgroundColor: '#adc123'});
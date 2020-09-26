// JS ES
//const element = document.createElement('h1');
 
//element.innerText = 'Hello, Platzi badgets';

//const container = document.getElementById('app');

//container.appendChild(element);

import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello, Platzi Badges from React & ReactDom!</h1>

const container = document.getElementById('app');

//ReactDom.render(__qué__, __donde__);
ReactDom.render(element, container);
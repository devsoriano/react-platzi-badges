// JS ES
//const element = document.createElement('h1');
 
//element.innerText = 'Hello, Platzi badgets';

//const container = document.getElementById('app');

//container.appendChild(element);

import React from 'react';
import ReactDom from 'react-dom';

//const jsx = <h1>Hello, Platzi Badges from React & ReactDom!</h1>
//const element = React.createElement('h1', {}, 'Hola!, soy los children');
//const element = React.createElement(
//  'a', 
//  {href: 'https://platzi.com'}, 
//  'Ir a Platzi'
//);
//const name = 'Rafa';
//const element = React.createElement(
//  'h1',
//  {},
 // `Hola soy ${name}`
//);
//const jsx = <h1>Hola soy {name}</h1>
const jsx = <div>
  <h1>Hola, soy Rafa</h1>
  <p>Soy ingeniero Frontend</p>
</div>
const container = document.getElementById('app');

//ReactDom.render(__qué__, __donde__);
ReactDom.render(jsx, container);
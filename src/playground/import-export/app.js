import subtractNumber, { add, square } from './utils.js';
import evalSenior, { canDrink } from './person.js';
// import validator from 'validator';

import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running');
console.log(square(4));
console.log(add(4, 5));
console.log(subtractNumber(4, 5));

// console.log(15, isAdult(15));
// console.log(22, canDrink(22));

console.log(evalSenior(70));

// console.log(validator.isEmail('nestor.panu@xxxx'));

// const template = React.createElement('p', {}, 'testing 123');
const template = <p>this is jsx text!</p>;
ReactDOM.render(template, document.getElementById('app'));
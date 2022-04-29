import { double, getType, isType } from './utils.js';

const doubled = double(4);

const type = getType(doubled);

const isNumber = isType(doubled, 'number');

console.log(type, isNumber)

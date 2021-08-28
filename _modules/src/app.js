import { union } from 'ramda';
import { multiply, sum } from './math';
import { Circle, Square } from './shapes';

import react from 'react';
import reactDOM from 'react-dom';

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

console.log(union(array1, array2));
console.log(sum(1, 2));
console.log(multiply(1, 2));
const square = new Square(10);
console.log(square.area());
const circle = new Circle(3);
console.log(circle.area());

// console.log("Hello Node.js!");
// console.log(111);
// console.log([1, 2, 3]);
// console.log({ A: 1, B: 2, C: 3 });

// const name = "John";
// console.log(name);

// const x = 2 + 3 - 1;
// console.log(x);

// console.log('เวลาปัจจุบัน', new Date());
// console.log('สุ่มเลข 1-10', Math.floor(Math.random() * 10) + 1);

// console.log('ตัว 0', process.argv[0]);
// console.log('ตัว 1', process.argv[1]);
// console.log('Hello', process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);

// console.log(process.argv)

// const x = +process.argv[2];
// const y = Number(process.argv[3]);

// const result = x + y;
// console.log(result);

// const greeting = require('./greeting');
import { sayHello, sayHi } from './greeting.js';

console.log(sayHello('John'));
console.log(sayHi('Jame'));
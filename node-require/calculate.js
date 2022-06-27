const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let result;
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    result = add.add(num1, num2);
    break;
  case 'minus':
    result = subtract.subtract(num1, num2);
    break;
  case 'times':
    result = multiply.multiply(num1, num2);
    break;
  case 'over':
    result = divide.divide(num1, num2);
    break;
}

console.log('result:', result);

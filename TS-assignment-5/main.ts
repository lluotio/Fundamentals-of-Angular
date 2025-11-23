import { Calculator } from './Modules/Calculator';

const calculator = new Calculator();
const arrayNumbers = [1,5,5,5,5,6];

const result = calculator.calcArray(arrayNumbers);

console.log(`Sum: ${result.sum} & count: ${result.count}`);
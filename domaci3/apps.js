const testArr_ = [true, false, [1, 23, 4, 5], 'string', 2, 23, 4, 'jos jedan'];

const booleanTest = testArr_.filter(tip => typeof tip === 'boolean');
const stringTest = testArr_.filter(tip => typeof tip === 'string');
const arrayTest = testArr_.filter(tip => typeof tip === 'array');
const numberTest = testArr_.filter(tip => typeof tip === 'number');

console.log(booleanTest);
console.log(stringTest);
console.log(arrayTest);
console.log(numberTest);
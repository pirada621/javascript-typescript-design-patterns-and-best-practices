const number = [1, 2, 3];
const obj = { a: 1, b: 2 };

console.log(number instanceof Array);//bad
console.log(Array.isArray(number))//good
console.log(Array.isArray(obj))//good
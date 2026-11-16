//bad
const value =0;
const result = value || 3000;
console.log(result)

//good
const value2 =0;
const result2 = value2 ?? 3000;
console.log(result2)

//good
let value3=0
value3 ??=3000
console.log(value3)
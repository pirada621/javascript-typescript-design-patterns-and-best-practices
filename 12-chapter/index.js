const obj = {};
const hiddenKey = Symbol('hidden');

obj['fullname'] = 'John';
obj[hiddenKey] = 'secret password';

for (const key in obj) {
    console.log(key);
}

console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.getOwnPropertySymbols(obj))

const s = Object.getOwnPropertySymbols(obj);
const password = obj[s[0]];
console.log(password);

Object.getOwnPropertySymbols(obj).forEach(sym => {
    console.log(obj[sym]);
});
// secret ไม่ออก
console.log(JSON.stringify(obj));

// const hiddenKey2 = Symbol('hidden2');
// const map = new Map();
// map.set(hiddenKey2, 'my password');

// console.log(obj);
// console.log(obj[hiddenKey]);
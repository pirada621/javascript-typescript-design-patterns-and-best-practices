// old way
function add(a, b) {
  b = b !== undefined ? b : 10;
  return a + b;
}

console.log(add(5));

// {}
// จะใส่ = หลัง ...moreMessages (rest parameter) ไม่ได้
function logMessage(message, ...moreMessages) {
  const message2 =
    moreMessages.length > 0 ? moreMessages : ['default'];
  console.log(message, message2);
}

logMessage('Hello js');
logMessage('Hello', 'b', 'c', 'd');

// new way (good)
function add(a, b = 10) {
  return a + b;
}

console.log(add(5));
const number  = [1,2];

//old
const result = number.map(function(num){
    return num *2;
})
console.log(result)

//arrow
const result2 = number.map(num=>num*2);
console.log(result2)
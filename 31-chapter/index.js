// bad
function getDayName(day) {
    switch (day) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
    } 
}
console.log(getDayName(5));

// good
function getDayName2(day) {
    switch (day) {
        case 1: 
            return 'Monday';
        case 2: 
            return 'Tuesday';
        default:
            // return 'day is invalid';
            throw new Error('day is invalid');
    } 
}
console.log(getDayName2(5));

// อย่าลืมใส่ break; ในกรณีที่ไม่ได้ return
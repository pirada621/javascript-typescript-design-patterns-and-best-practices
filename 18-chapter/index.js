/**
 * @typedef {Object} User
 * @property {string} fullname
 * @property {number} age
 */

/**
 * แสดงข้อความ
 * @param {User} user
 * @param {boolean} isActive
 */
function printUser(user, isActive) {
    console.log(user.fullname);
    console.log(user.age);
    console.log(isActive);
}

printUser({ fullname: 'john', age: 30 }, true);
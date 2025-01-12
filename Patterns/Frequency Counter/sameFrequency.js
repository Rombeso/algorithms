/*
Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)
*/



// Teacher's Solution
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

// Мой вариант, но решенный сo счетчиком частоты
/* function sameFrequency(num1, num2) {
    const strNum1 = String(num1)
    const strNum2 = String(num2)
    const obj = {}
    if (strNum1.length !== strNum2.length) {
        return false
    }

    for (let i = 0; i < strNum1.length; i++) {
        obj[strNum1[i]] ? obj[strNum1[i]] += 1 : obj[strNum1[i]] = 1
    }
    for (let i = 0; i < strNum1.length; i++) {
        if (!obj[strNum2[i]]) {
            return false
        } else {
            obj[strNum2[i]] -= 1
        }
    }
    return true
}
 */
/* Мой вариант, но решенный без счетчика
function sameFrequency(num1, num2) {
    const strNum1 = String(num1)
    const strNum2 = String(num2)
    if (strNum1.length !== strNum2.length) {
        return false
    }
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < strNum1.length; i++) {
        sum1 += +strNum1[i]
        sum2 += +strNum2[i]
    }
    if (sum1 === sum2) {
        return true
    }
    return false
}
*/

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
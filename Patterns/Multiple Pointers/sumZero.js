/* Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0;
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

// Teacher solution
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const numLeft = arr[left]
        const numRight = arr[right]
        const sum = numLeft + numRight
        if (sum === 0) {
            return [numLeft, numRight]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }

    }
}


/*
My solution
function sumZero(arr) {
    const res = []
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const numLeft = arr[left]
        const numRight = arr[right]
        if(numLeft > 0 && numRight > 0 || numLeft < 0 && numRight < 0 || numLeft === 0 || numRight === 0) {
            return undefined
        }
        if ((numLeft + numRight) === 0) {
            res.push(numLeft)
            res.push(numRight)
            return res
        } else {
            if (Math.abs(numLeft) < numRight) {
                right--
            } else {
                left++
            }
        }
    }
}

*/


/*
Time - O(n)
Space - O(1)
*/

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined


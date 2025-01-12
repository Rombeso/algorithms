/*
Write a function called averagePair.
Given a sorted array of intergers and a target average,
determine if there is a pair of values in the array where
the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(n)
Space: O(1)
 */

// My solution
function averagePair(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    if (!arr.length) {
        return false
    }

    while (left < right) {
        const average = (arr[left] + arr[right]) / 2
        if (average === num) {
            return true
        }
        if (average > num){
            right--
        }
        if (average < num){
            left++
        }
    }
    return false
}

// Teacher solution
/*
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
 */


console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 11, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
/* Implement a function called, areThereDuplicates which
accepts a variable number of arguments,
    and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR
the multiple pointers pattern

Restrictions

- Time - O(n)
- Space - O(n)
*/

/* One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
*/
// Решение с помощью multiple pointers pattern
function areThereDuplicates(...params) {
    params.sort((a, b) => a > b ? 1 : a === b ? 0 : -1)
    let start = 0
    let second = 1
    while (second <= params.length-1) {
        if(params[start] === params[second]) {
            return true
        }
        start++
        second++
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 3, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

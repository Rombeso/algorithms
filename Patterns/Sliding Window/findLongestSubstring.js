function findLongestSubstring(str) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let dictionary = {}

    while(end < str.length) {
        let chart = str[end]
        if (dictionary[chart]) {
            start = Math.max(start,dictionary[chart])
        }
        maxLength = Math.max(maxLength, end - start + 1)
        dictionary[chart] = end + 1
        end++
    }
    return maxLength
}

/*Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.*/

/* Teacher solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);

    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
*/
console.log(findLongestSubstring('pwwkew')) // 3
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6



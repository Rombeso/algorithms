// Вариант учителя
function maxSubarraySum(arr, num) {
    let max = 0;
    let temp = 0;

    if (num > arr.length) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }

    return max;
}

/*
Сложность On

Решение с помощью патерна Скользящего Окна.
Двигаемся по массивы на задоном растоянии вправо отнимая от суммы
первое число и прибовляя новое последнее.

*/
/*
1 мой вариант
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  let j = 1;
  let temp = arr[0];
  for (let i = 0; i < arr.length; i) {
    if (num > j + 1) {
      temp += arr[j];
    }
    if (num == j + 1) {
      temp += arr[j];
      max = temp;
    }
    if (num < j + 1) {
      temp = temp - arr[i] + arr[j];
      if (temp > max) {
        max = temp;
      }
      i++;
    }
    j++;
  }
  return max;
}
*/

console.log(maxSubarraySum([2, 6, 5, 2, 3, 2, 7, 9, 1], 3)); // 18
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([], 5)); // null

// [0, 1, 2, 3]
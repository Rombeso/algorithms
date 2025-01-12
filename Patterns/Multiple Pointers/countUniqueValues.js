/* Implement a function called countUniqueValues, which accepts
a sorted Frequency Counter, and counts the unique values in the Frequency Counter.
There can be negative numbers in the Frequency Counter, but it will always
be sorted
*/

function countUniqueValues(arr) {
    let i = 0;
    if (!arr.length) {
        return 0;
    }
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            continue;
        }
        if (arr[i] < arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

/*
Оценка по времени: O(n), где n - размер списка arr

Описание решения
Использую патерн с указателями, сохраняя в масиве попорядку
уникальные значения. В итоге получаю i с колличеством уникальных
значений в массиве
*/
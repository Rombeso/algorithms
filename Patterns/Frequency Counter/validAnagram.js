/* При наличии двух строк напишите функцию, которая определит,
является ли вторая строка анаграммой первой. Анаграмма - это слово,
фраза или название, образованное путем перестановки букв другого слова,
например, cinema, образованного от iceman.
*/

function validAnagram(str1, str2) {
    const obj = {}

    if (str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i]
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i]
        if (!obj[letter]) {
            return false
        } else  {
            obj[letter] -= 1
        }
    }

    return true
}
/*
Time - O(n)
Space - O(n)
*/

    console.log(validAnagram('', '')) // should return `true`.
    console.log(validAnagram('aaz', 'zza')) // should return `false`.
    console.log(validAnagram('anagram', 'nagaram')) // should return `true`.
    console.log(validAnagram('rat', 'car')) // should return `false`.
    console.log(validAnagram('awesome', 'awesom')) // should return `false`.
    console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // should return `false`.
    console.log(validAnagram('qwerty', 'qeywrt')) // should return `true`.
    console.log(validAnagram('texttwisttime', 'timetwisttext')) // should return `true`.
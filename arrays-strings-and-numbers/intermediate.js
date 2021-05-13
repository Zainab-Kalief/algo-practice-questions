// 1: Check if two strings are anagrams of each other
function isAnagram(foo, bar) {
    if (foo.length != bar.length) {
        return false
    }

    const fooMap = {}
    const barMap = {}

    for (let i = 0; i < foo.length; i++) {
        if (!(foo[i] in fooMap)) {
            fooMap[foo[i]] = 1
        } else {
            fooMap[foo[i]]++
        }

        if (!(bar[i] in barMap)) {
            barMap[bar[i]] = 1
        } else {
            barMap[bar[i]]++
        }
    }

    for (const key in fooMap) {
        if (!(key in barMap) || barMap[key] != fooMap[key]) {
            return false
        }
    }

    return true
}
/*
EXAMPLE 1: foo = 'taco', bar = 'atco'
ANSWER: true

EXAMPLE 2: foo = 'taco', bar = 'atoo'
ANSWER: false
*/

// 2: Check if an array is within another array
function checkForOneArrayInAnother(firstList, secondList) {
    if (!firstList.length || !secondList.length) return false;

    let smallList = firstList,
        bigList = secondList,
        j = 0;

    if (secondList.length < firstList.length) {
        smallList = secondList;
        bigList = firstList;
    }

    for (let i = 0; i < bigList.length; i++) {
        if (j == smallList.length) return true;

        if (bigList[i] === smallList[j]) {
            j++;
        } else {
            if (j > 0) {
                j = 0;
                i--;
            }
        }
    }

    if (j == smallList.length) return true;

    return false;
}
/*
EXAMPLE 1: firstList = [1, 2, 3, 2, 3, 4, 5], secondList = [2, 3, 4]
ANSWER: true

EXAMPLE 2: firstList = [1, 2, 3, 2, 3, 5], secondList = [2, 3, 4]
ANSWER: false
*/

// 3. Add two arrays togther in order
function addArrayValuesInOrder(arr1, arr2) {
    let big, small
    let j = 0

    if (arr1.length > arr2.length) {
        big = arr1
        small = arr2
    } else {
        big = arr2
        small = arr1
    }

    const isQualLengths = big.length == small.length

    for (let i = 1; i < big.length; i += 2) {
        if (j == small.length) {
            break
        }
        shifter(big, i)
        big[i] = small[j]
        j++
    }

    if (isQualLengths) {
        big.push(small[small.length - 1])
    }

    return big
}

function shifter(arr, ind) {
    for (let i = arr.length; i > ind; i--) {
        arr[i] = arr[i - 1]
    }

    return arr
}
/*
EXAMPLE: arr1 = [14, 7, 2, 60], arr2 = [9, 37]
ANSWER: [ 14, 9, 7, 37, 2, 60 ]
*/

// 4. Find the longest occuring character in string
function longestOccuringCharacer(value) {
    if (!value || value.length === 1) return value

    const originals = {}
    let max = 0,
        character = ""

    for (const c of value) {
        originals[c] = originals[c] ? originals[c] + 1 : 1

        if (originals[c] > max) {
            character = c
            max = originals[c]
        }
    }
    return character
}
/*
EXAMPLE: value = 'geeksforgeeks'
ANSWER: e
*/

// 5. Reverse words in a given string (sentence)
function extractWords(str) {
    const words = {}
    let wordCount = 1
    let word = ''

    for (let i = 0; i < str.length; i++) {
        if (!word && str[i] == ' ') {
            continue
        }

        if (str[i] == ' ') {
            words[wordCount] = word
            word = ''
            wordCount++
        } else {
            word += str[i]
        }
    }

    if (word) {
        words[wordCount] = word
    }

    return words
}

function reverseWordsInSentence(value) {
    if (!value) {
        return null
    }

    const words = extractWords(value)
    const wordsList = Object.keys(words)
    let reversed = ''

    for (let i = wordsList.length - 1; i >= 0; i--) {
        reversed += words[wordsList[i]]

        if (i != 0) {
            reversed += ' '
        }
    }

    return reversed
}
/*
EXAMPLE: value = 'electric cars are the future'
ANSWER: future the are cars electric
*/


// 6. Check if string is alphabetically in order
function ifInOrder(value) {
    if (!value || typeof value != 'string') {
        return null
    }
    for (let i = 0; i < value.length - 1; i++) {
        if (value[i] > value[i + 1]) {
            return false
        }
    }

    return true
}
/*
EXAMPLE 1: value = 'adfzb'
ANSWER: false

EXAMPLE 2: value = 'acdfz'
ANSWER: true
*/

// 7. Rotote string characters by n numbers
function rotate(value, n) {
    if (n == value.length || n == 0) {
        return value
    }

    if (Math.abs(n) > value.length) {
        n = n % value.length
    }

    if (n < 0) {
        n = value.length - Math.abs(n)
    }

    return value.substring(n) + value.substring(0, n)
}
/*
EXAMPLE 1: value = 'taco', n = 1
ANSWER: acot

EXAMPLE 2: value = 'taco', n = 3
ANSWER: otac

EXAMPLE 3: value = 'taco', n = -7
ANSWER: acot
*/

// 8. Find longest unique characters in string
function longestUniqueSubString(value) {
    const originals = {}
    let sub = ''
    let longest = ''

    for (const v of value) {
        if (v in originals) {
            if (sub.length > longest.length) {
                longest = sub
            }
            sub = ''
        } else {
            originals[v] = 1
            sub += v
        }
    }
    if (sub.length > longest.length) {
        longest = sub
    }

    return longest
}
/*
EXAMPLE 1: value = 'abbcdeffg'
ANSWER: cdef

EXAMPLE 2: value = 'abcbbbefbghijk'
ANSWER: ghijk
*/

// 9. Find unique characters in string in thier occuring order
function getUniqueCharatersOfString(value) {
    if (!value || value.length == 1) return value

    const original = {}
    let unique = ''
    value = value.toLowerCase()

    for (let i = 0; i < value.length; i++) {
        if (!(value[i] in original)) {
            unique += value[i]
            original[value[i]] = true
        }
    }

    return unique
}
/*
EXAMPLE: value = 'geeksforGeeks'
ANSWER: geksfor
*/

// 10. Given a string, get the start and ending index of repeated characters in a sub string of the string
function getRepeatedIndicies(value) {
    const result = []

    for (let i = 0; i < value.length - 1; i++) {
        if (value[i] == value[i + 1]) {
            const end = getEndingIndex(value, i, i + 1)
            result.push([i, end])
            i = end
        }

    }

    return result
}

function getEndingIndex(str, start, end) {
    while (str[start] == str[end]) {
        end++
    }
    return end - 1
}
/*
EXAMPLE: value = 'hellooooloo'
ANSWER: [ [ 2, 3 ], [ 4, 7 ], [ 9, 10 ] ]
*/

// 11. Flatten an array with nested array(s) 
// Solution 1: Using just recursion
function flatten1(list, ind = 0, result = []) {
    if (ind === list.length) return result

    if (Array.isArray(list[ind])) {
        flatten1(list[ind], 0, result)
    } else {
        result.push(list[ind])
    }

    return flatten1(list, ind + 1, result)
}

// Solution 2: Using for loop + recursion
function flatten2(list, result = []) {
    for (const v of list) {
        if (Array.isArray(v)) {
            flatten2(v, result)
        } else {
            result.push(v)
        }
    }

    return result
}
/*
EXAMPLE: list = [[1], [2, 3], 4, [[5], 6]]
ANSWER: [ 1, 2, 3, 4, 5, 6 ]
*/

// 12. Find pairs in an array that add up to sum
function findPairsThatAddUpToSum(list, sum) {
    const result = []
    const map = {}

    for (const v of list) {
        if (v in map) {
            result.push([v, map[v]])
        } else {
            map[sum - v] = v
        }
    }
    return result
}
/*
EXAMPLE: list = [0, 3, 5, 2, 9, 8]; sum = 5
ANSWER: [ [ 5, 0 ], [ 2, 3 ] ]
*/

// 13. Find the second highest number in array secondHighest & secondToMax & secondMaximumNumberInArray
// Solution 1:
function secondMaximumNumberInArray1(list) {
    if (!list.length || list.length === 1) return false

    let max = list[0],
        secondMax = -Infinity

    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            if (max > secondMax) {
                secondMax = max;
            }
            max = list[i]
        } else if (list[i] > secondMax) {
            secondMax = list[i]
        }
    }
    return secondMax
}

// Solution 2:
function secondMaximumNumberInArray2(list) {
    const result = {}

    for (const v of list) {
        if (!(v in result)) {
            result[v] = 'something'
        }
    }

    const keys = Object.keys(result)

    return keys[keys.length - 2] * 1
}
/*
EXAMPLE: list = [10, 2, 6, 11, 4, 20]
ANSWER: 11
*/

// 14. Check if a string contains all the vowels and each vowel should only appear once
function checkForVowels(value) {
    const vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    for (var character of value) {
        const formatted = character.toLowerCase()

        if (formatted in vowels) {
            vowels[formatted] += 1
        }

        if (vowels[character] > 1) {
            return false
        }
    }

    for (key in vowels) {
        if (vowels[key] != 1) return false
    }

    return true
}
/*
EXAMPLE 1: value = 'Julia Roberts'
ANSWER: true

EXAMPLE 2: value = 'Julia Robeerts'
ANSWER: false
*/

// 15. Given a string, return new string without repeated characters
function removeDuplicates(value) {
    const characters = {},
        arr = []

    let result = ""

    for (var i = 0; i < value.length; i++) {
        if (!(value[i] in characters)) {
            characters[value[i]] = 1
            arr.push(value[i])
        }
    }

    result = arr.join("")

    return result
}
/*
EXAMPLE: value = 'banana'
ANSWER: ban
*/

// 16. Given an array, delete values in range (from start index to end index)
function deleteValuesFromArrayInRange(list, startIndex, endIndex) {
    if (startIndex > endIndex || startIndex < 0 || endIndex >= list.length) return false

    let i = endIndex + 1,
        j = startIndex

    while (i < list.length) {
        list[j] = list[i]
        j++;
        i++;
    }

    list.length = list.length - (endIndex - startIndex + 1)

    return list
}
/*
EXAMPLE: list = [20, 30, 40, 50, 60, 70, 80, 90, 100], startIndex = 2, endIndex = 4
ANSWER: [ 20, 30, 70, 80, 90, 100 ]
*/

// 17. Given an array of sequential numbers with one number missing, find number that is missing from the range of numbers
function findMissingNumberInRange(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] > 1) {
            return list[i] + 1
        }
    }
}
/*
EXAMPLE: list = [1, 2, 3, 4, 5, 6, 8, 9]
ANSWER: 7
*/

// 18. Find the first non repeating character in a string
function findFirstNonRepeatingXter(value) {
    const map = {}
    let first = "",
        ind

    for (let i = 0; i < value.length; i++) {
        if (value[i] in map) {
            map[value[i]][0] += 1
        } else {
            map[value[i]] = [1, i]
        }
    }

    for (const k in map) {
        if (map[k][0] == 1) {
            if (!ind) {
                ind = map[k][1]
                first = k
            }
            if (map[k][1] < ind) {
                ind = map[k][1]
                first = k
            }
        }
    }

    return first
}
/*
EXAMPLE: value = 'abacd'
ANSWER: b
*/

// 19. Given array, remove duplicates from the array in place (meaning return back the same array)
function remove(arr, ind) {
    for (let i = ind; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length -= 1

    return arr
}

function removeDuplicateInPlace(list) {
    const original = {}

    for (let i = 0; i < list.length; i++) {
        if (list[i] in original) {
            remove(list, i)
            i--
        } else original[list[i]] = 1
    }

    return list
}
/*
EXAMPLE: list = [1, 2, 3, 2, 3, 4, 5, 5]
ANSWER: [ 1, 2, 3, 4, 5 ]
*/

// 20. Find out if all parenthesis in a given string have a corresponding matched parenthesis in the string
function parenthesisMatch(value) {
    const result = { left: 0, right: 0 }

    for (var i = 0; i < value.length; i++) {
        if (value[i] == "(") {
            result["left"] += 1
        }

        if (value[i] == ")") {
            result["right"] += 1
        }
        if (result["right"] > result["left"]) {
            return false
        }
    }
    if (result["right"] == result["left"]) {
        return true
    }
    return false
}
/*
EXAMPLE 1: value = 'abc(z)(c)(())'
ANSWER: true

EXAMPLE 2: value = abc(z)(()(
ANSWER: false
*/
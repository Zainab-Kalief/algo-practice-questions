const romanValue = { C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

// 1. Convert roman numeral string to number
function convertRomanNumeralToNumber(value) {
    if (!value) return 0

    value = value.toUpperCase()

    let number = 0,
        current = romanValue[value[0]],
        previous = 0

    if (!current) return -1

    number += current

    for (let i = 1; i < value.length; i++) {
        previous = romanValue[value[i - 1]];
        current = romanValue[value[i]];

        if (!current || !previous) return -1

        if (current > previous) {
            number = number - previous * 2 + current
        } else {
            number += current
        }
    }
    return number
}
/*
EXAMPLE: value = 'XXIV'
ANSWER: 24
*/

// 2. Convert number to roman numeral
function convertNumberToRomanNumeral(number) {
    if (!number) return 0

    let romanNumeral = ''

    for (const key in romanValue) {
        while (number >= romanValue[key]) {
            romanNumeral += key
            number -= romanValue[key]
        }
    }
    return romanNumeral
}
/*
EXAMPLE: number = 24
ANSWER: 'XXIV'
*/

// 3. Find possible sub string combinations from given string
function possibleStringCombo(value, valueIndex = 0, combinations = []) {
    if (value.length === valueIndex) {
        combinations.push('')
        return combinations
    } else {
        combinations.push(value[valueIndex])

        const combinationsLength = combinations.length

        for (let i = 0; i < combinationsLength - 1; i++) {
            combinations.push(combinations[i] + value[valueIndex])
        }
    }

    return possibleStringCombo(value, valueIndex + 1, combinations);
}
/*
EXAMPLE: value = 'abc'
ANSWER: ['a',   'b',  'ab', 'c',   'ac', 'bc', 'abc', '']
*/

// 4. Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0)
const getDistance = (point) => {
    const [x, y] = point
    return (x * x) + y * y
}

const getClostestPoints = (points, k) => {
    const list = points.sort((a, b) => {
        const distA = getDistance(a)
        const distB = getDistance(b)

        return distA - distB
    })

    return list.slice(0, k)
}
/*
EXAMPLE: points = [[3,3],[5,-1],[-2,4]], k = 2
ANSWER: [ [ 3, 3 ], [ -2, 4 ] ]
*/

// 5. Permutation
function permutationOfValues(list, listIndex = list.length - 1, result = []) {
    if (listIndex < 0) return result

    if (list.length === 1) return list

    if (list.length === 2) return [[list[0], list[1]], [list[1], list[0]]]

    const subPermutation = []

    for (let i = 0; i < list.length; i++) {
        if (i != listIndex) {
            subPermutation.push(list[i])
        }
    }

    const mainPermutation = permutationOfValues(subPermutation, subPermutation.length - 1)

    for (const value of mainPermutation) {
        value.push(list[listIndex]);
        result.push(value);
    }

    return permutationOfValues(list, listIndex - 1, result)
}
/*
EXAMPLE: list = [1,2,3]
ANSWER: [
[ 1, 2, 3 ],
[ 2, 1, 3 ],
[ 1, 3, 2 ],
[ 3, 1, 2 ],
[ 2, 3, 1 ],
[ 3, 2, 1 ]
]
*/

// 6. Given a number n, generate a list with all possible n parenthesis pair combinations
function validPairCombo(open, close = 0, pairs = "", result = []) {
    if (open > 0) {
        validPairCombo(open - 1, close + 1, pairs + "(", result)
    }

    if (close > 0) {
        validPairCombo(open, close - 1, pairs + ")", result)
    }

    if (open == 0 && close == 0) {
        result.push(pairs)
    }

    return result
}
/*
EXAMPLE 1: n OR open = 2
ANSWER: [ '(())', '()()' ]

EXAMPLE 2: n OR open = 3
ANSWER: [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
*/

// 7. Find the longest palidrome sub string in a given string
function longestPalindrome(value) {
    let palindrome = ''

    for (let i = 0; i < value.length; i++) {
        const odd = getPalidrome(value, i, i)

        if (odd.length > palindrome.length) {
            palindrome = odd
        }

        const even = getPalidrome(value, i, i + 1)

        if (even.length > palindrome.length) {
            palindrome = even
        }
    }

    return palindrome
}

function getPalidrome(value, start, end) {
    while (start >= 0 && end < value.length && value[start] === value[end]) {
        start--
        end++
    }
    return value.slice(start + 1, end)
}
/*
EXAMPLE: value = 'dadreddernun'
ANSWER: redder
*/

// 8. Find the sum of contiguous subarray within an array of numbers that has the largest sum
function findMaximumSumAndRangeInSubArray(list) {
    if (!list.length) return false

    let currentMax = -Infinity,
        totalMax = -Infinity,
        startIndex = 0,
        endIndex = 0,
        previousMax = totalMax

    for (let i = 0; i < list.length; i++) {
        previousMax = totalMax
        currentMax = Math.max(currentMax, 0) + list[i]
        totalMax = Math.max(currentMax, totalMax)

        if (totalMax > previousMax) {
            endIndex = i
        }
    }

    let totalMaxCopy = totalMax

    for (let i = endIndex; i >= 0; i--) {
        totalMaxCopy -= list[i]

        if (totalMaxCopy === 0) {
            startIndex = i
            break
        }
    }

    console.log(`start ${startIndex}, end ${endIndex}`)

    return totalMax
}
/*
EXAMPLE: list = [-3, -2, 4, -1, -2, 5, -4]
ANSWER: 6
*/

// 9. Find the longest consecutive non repeating characters in string
function longestConsecutiveXters(value) {
    let formattedStr = value.toLowerCase()

    let answer = "",
        subStr = ""

    for (let i = 0; i < formattedStr.length - 1; i++) {
        const index1 = formattedStr[i].charCodeAt() - 96
        const index2 = formattedStr[i + 1].charCodeAt() - 96

        if (index2 - index1 != 1) {
            subStr += value[i]

            if (subStr.length > answer.length) answer = subStr

            subStr = ""
        } else {
            subStr += value[i]
        }
    }

    if (subStr) {
        const index1 = formattedStr[formattedStr.length - 2].charCodeAt() - 96
        const index2 = formattedStr[formattedStr.length - 1].charCodeAt() - 96

        if (index2 - index1 == 1) {
            subStr += value[formattedStr.length - 1]
        }

        if (subStr.length > answer.length) {
            answer = subStr
        }
    }
    return answer
}
/*
EXAMPLE: value = 'XyZdEFgZZZZabcdeF'
ANSWER: abcdeF
*/

// 10. Given an array of size n and an integer k, return the count of distinct numbers in all windows of size k.
function countOfDistinctNumbersInGivenWindow(list, k) {
    const result = []
    k = k - 1

    for (let i = 0; i <= k; i++) {
        const subArr = []

        for (let j = i; j <= k + i; j++) {
            subArr.push(list[j])
        }

        result.push(subArr)
    }

    for (let i = 0; i < result.length; i++) {
        let y = {},
            count = 0

        for (let j = 0; j < result[i].length; j++) {
            if (!(result[i][j] in y)) {
                y[result[i][j]] = true
                count++
            }
        }

        result[i] = count
    }

    return result
}
/*
EXAMPLE: list = [1, 2, 1, 3, 4, 2, 3], k = 4
ANSWER: [ 3, 4, 4, 3 ]
*/

// 11. Given a sorted array and a number x, find the pair in array whose sum is closest to x
function closestSum(list, x) {
    let i = 0,
        l = list.length - 1,
        difference = Number.MAX_VALUE,
        result = []

    while (i < l) {
        const currentDifference = Math.abs(list[i] + list[l] - x)

        if (currentDifference < difference) {
            difference = currentDifference
            result = [list[i], list[l]]
        }

        if (list[i] + list[l] == x) {
            return result
        } else if (list[i] + list[l] < x) {
            i++
        } else if (list[i] + list[l] > x) {
            l--
        }
    }

    return result
}
/*
EXAMPLE: list = [1, 3, 4, 7, 10], x = 9
ANSWER: [ 1, 7 ]
*/

// 12. Find the maximum sum in a contiguous sub-array of the given array
function findTheMaximumSumOfSubArr(list) {
    let currentMax = Number.NEGATIVE_INFINITY,
        totalMax = Number.NEGATIVE_INFINITY

    list.forEach(v => {
        currentMax = Math.max(currentMax, 0) + v

        totalMax = Math.max(totalMax, currentMax)
    })

    return totalMax
}
/*
EXAMPLE: list = [-2, -3, 4, -1, -2, 1, 5, -3]
ANSWER: 7
*/

// 13. In a given array, find sub array with given sum
function findSubArrayWithGivenSum(list, sum) {
    let start = 0,
        end = 0,
        add = list[0];

    if (add == sum) return [start, end]

    for (let i = 1; i < list.length; i++) {
        add += list[i]
        end = i

        if (add == sum) return [start, end]

        while (add > sum && start < list.length) {
            add -= list[start]
            start += 1
        }
    }

    if (add == sum) return [start, end]

    return false
}
/*
EXAMPLE: list = [4, 5, 2, 3, 9, 6], sum = 5
ANSWER: [ 2, 3 ]
*/

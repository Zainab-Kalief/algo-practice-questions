// 1: Pop the first value in an array and return back the popped value
function popFirst(array) {
    if (!array.length) {
        return null
    }

    const first = array[0]

    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }

    array.length -= 1

    return first
}
/*
EXAMPLE: array = [18, 4, 39, 5, 20] 
ANSWER: 18; Array should look like this after -> [4, 39, 5, 20]
*/

// 2: Return n (index) value from the last value in the array
function nthFromLast(array, index) {
    if (index >= 0 && array.length - 1 - index >= 0) {
        return array[array.length - 1 - index]
    } else {
        return null
    }
}
/*
EXAMPLE: array = [9, 1, 5, 21], index = 2
ANSWER: 1
*/

// 3: Insert value in an array at a given index
function insertAt(array, value, index) {
    if (index >= 0 && index < array.length) {
        for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1]
        }

        array[index] = value
    }

    return array
}
/*
EXAMPLE: array = [9, 1, 5, 21], value = 6, index = 2
ANSWER: [ 9, 1, 6, 5, 21 ]
*/

// 4: Remove value from array at a given index
function removeAt(array, index) {
    if (index >= 0 && index < array.length) {
        const removed = array[index]

        for (let i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1]
        }

        array.length -= 1

        return removed
    } else {
        return null
    }
}
/*
EXAMPLE: array = [9, 1, 5, 21], index = 2
ANSWER: 5; Array should look like this after -> [9, 1, 21]
*/

// 5: Pop last value in an array
function pop(array) {
    if (!array.length) {
        return null
    }

    const last = array[array.length - 1]

    array.length -= 1

    return last
}
/*
EXAMPLE: array = [9, 1, 5, 21]
ANSWER: 21; Array should look like this after -> [9, 1, 5]
*/

// 6: Shuffle the array
function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.trunc(Math.random() * array.length)
        const temp = array[i]

        array[i] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}
/*
EXAMPLE: array = [2, 4, 6, 8, 10]
ANSWER: values in array are shuffled
*/

// 7: Check if string is palidrome
function isPalidrome(value) {
    if (!value) {
        return null
    }

    let end = value.length - 1

    for (let start = 0; start < Math.trunc(value.length / 2); start++) {
        if (value[start] != value[end]) {
            return false
        }
        end--
    }

    return true
}
/*
EXAMPLE: value = 'racecar'
ANSWER: true
*/

// 8: Reverse characters in string
function reverseStringCharacters(value) {
    if (!value) {
        return null
    }

    let reversed = ''

    for (let i = value.length - 1; i >= 0; i--) {
        reversed += value[i]
        
    }

    return reversed
}
/*
EXAMPLE: value = 'wura'
ANSWER: 'aruw'
*/

// 9: Reverse digits in number
function reverseDigitsInNumber(value) {
    const str = value + ''
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed * 1
}
/*
EXAMPLE: value = 19025
ANSWER: 52091
*/

// 10. Fibonacci
// Solution 1: Using while loop
function fibonacci(num) {
    let current = 0, next = 1

    while (num) {
        let temp = next 
        next += current 
        current = temp

        num --
    }

    return current
}

// Solution 2: Using recursion
function fibonacci2(num, current = 0, next = 1) {
    if (num == 0) return current

    return fibonacci2(num - 1, next, next + current)
  }
/*
EXAMPLE: num = 6
ANSWER: 8
*/
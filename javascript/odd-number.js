/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */

const counter = (numbers) => {
    const result = Object.create({})
    for (let i = 0; i < numbers.length; i++) {
        if (result[numbers[i]]) {
            result[numbers[i]]++
        } else {
            result[numbers[i]] = 1
        }
    }

    return result
}

const findOddNumber = (numbers) => {
    const counts = counter(numbers)
    const num = [...new Set(numbers)]

    for (let i = 0; i < Object.keys(counts).length; i++) {
        if (counts[num[i]] % 2 !== 0)
            return num[i]
    }

   return 0
}

module.exports = {
    findOddNumber
}
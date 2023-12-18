/**
 * 
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */ 

function counter(numbers: number[]): Record<number, number> {
    const result: Record<number, number> = Object.create({})
    for (let i = 0; i < numbers.length; i++) {
        if (result[numbers[i]]) {
            result[numbers[i]]++
        } else {
            result[numbers[i]] = 1
        }
    }

    return result
}

export function findOddNumber(numbers: number[]) : number {
    const counts = counter(numbers)
    const num = [...new Set(numbers)]

    for (let i = 0; i < Object.keys(counts).length; i++) {
        if (counts[num[i]] % 2 !== 0)
            return num[i]
    }

   return 0
}
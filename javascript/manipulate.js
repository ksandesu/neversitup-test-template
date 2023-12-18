/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
    if (text.length === 1) {
       return [text]
    } else {
       return shuffle(text)
    }
 }
 
const reverse = (text) => {
    return text.split("").reverse().join("")
 }
 
const shuffle = (text) => {
    const store= Object.create({})
 
    for (let i = 0; i < text.length; i++) {
       for (let j = 0; j < text.length; j++) {
          let temp = text.split("")
          let root = temp.splice(i, 1).join("")
          temp.splice(j, 0, root)
          store[temp.join("")] = true
          store[reverse(temp.join(""))] = true
       }
    }
 
    return Object.keys(store).sort()
 }
 

module.exports = {
    manipulate
}
/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (texts) => {
    const result = texts.filter(face => /^(?:\:|\;)(?:-|~)?(?:\)|D)$/.test(face))

    return result.length
}

module.exports = {
    countSmilyFace
}
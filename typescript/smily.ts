/**
 * 
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]) : number {
    const result = texts.filter(face => /^(?:\:|\;)(?:-|~)?(?:\)|D)$/.test(face))

    return result.length
}

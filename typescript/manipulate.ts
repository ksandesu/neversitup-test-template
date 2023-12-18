/**
 * 
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */ 
export function manipulate(text: string) : string[] {
   if (text.length === 1) {
      return [text]
   } else {
      return shuffle(text)
   }
}

function reverse(text: string): string {
   return text.split("").reverse().join("")
}

function shuffle(text:string) {
   const store: Record<string, boolean> = Object.create({})

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

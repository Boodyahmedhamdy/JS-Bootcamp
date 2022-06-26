function separate(title = "") {
    console.log(`---------------${title}----------------`)
}

let theName = "boody ahmed hamdy"

// uses start, end indexes
separate("substring()") // end isn't included
console.log(theName.substring())
console.log(theName.substring(3))
console.log(theName.substring(3, 5))
console.log(theName.substring(5, 3)) // the same result
console.log(theName.substring(-2)) // negative number starts from 0
console.log(theName.substring(-1, 8))
console.log(theName.substring(-1, -8))
console.log(theName.substring(0, 0))


separate("substr()")
console.log(theName.substr(3, 7)) // from index 3 give me 7 characters


separate("includes()") // returns true / false
console.log(theName.includes("ahmed")) 


separate("startsWith()")
console.log(theName.startsWith("b"))
console.log(theName.startsWith("B"))
console.log(theName.startsWith("s", 3)) // is string theName from index 3 starts with s
console.log(theName.startsWith("d", 3))


separate("endsWith()") // uses length not the index
console.log(theName.endsWith("y"))
console.log(theName.endsWith("3"))
console.log(theName.endsWith("d", 4)) // in boody
console.log(theName.endsWith("d", 11)) // in ahmed



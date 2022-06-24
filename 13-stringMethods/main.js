function separate(title = "") {
    console.log(`-------------${title}----------------`)
}

let theName = "boody ahmed hamdy"

separate("indexing");
console.log(theName[3]) // d
console.log(theName.charAt(3))

separate("length")
console.log(theName[theName.length]) // undefined
console.log(theName.charAt(theName.length)) // nothing
// to get last element
console.log(theName[theName.length-1]); // y



separate("trim() to clear spaces")
theName = "   boody    "
console.log(theName.trim())
console.log(theName.trimEnd())
console.log(theName.trimStart())


separate("uppercase and lowercase")
theName = "boody ahmed hamdy"
console.log(theName.toUpperCase())
console.log(theName.toLowerCase())

separate("method chaining")
console.log(theName.charAt(theName.length-1).toUpperCase()) // Y
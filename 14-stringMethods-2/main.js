function separate(title = "") {
    console.log(`-------------${title}----------------`)
}

let theName = "boody ahmed hamdy"


separate("indexOf()") // returns -1 if string is not found
console.log(theName.indexOf("ahmed")) // start searching from index 0 -- by default
console.log(theName.indexOf("boody", 5)) // start searching from index 5


separate("lastIndexOf()") // starts searching from the end
console.log(theName.lastIndexOf("m")) // index of last m in the string


separate("slice()") // end isn't included
console.log(theName.slice(3)) // start from index 2 to the end
console.log(theName.slice(3, 9)) // the end index isn't included -> 3 to 8 'dy ahm'
console.log(theName.slice(-5, -2)) // from the end like python -> 'ham' 


separate("repeat()")
console.log(theName.repeat(3))


separate("split()")
console.log(theName.split())
console.log(theName.split(""))
console.log(theName.split(" "))
console.log(theName.split("", 4))



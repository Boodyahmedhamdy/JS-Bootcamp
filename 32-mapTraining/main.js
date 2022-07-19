// swap cases using map
let theName = "elZERo"

// split to make it as array to apply map on it
let swappedName = theName.split("").map(function(char) {
    return char === char.toUpperCase() ?
    char.toLowerCase() :
    char.toUpperCase()
}).join("") // jion to return it as string
console.log(theName)
console.log(swappedName)


// invert numbers
let numbers = [1, -10, -20, 15, 100, -30]

let invertedNumbers = numbers.map(function(element) {
    return -element
})

console.log(numbers)
console.log(invertedNumbers)


// ignore numbers
let example = "elz1234er56o"


let ignoredNumbers = example.split("").map(function(char) {
    return isNaN(parseInt(char)) ? char : ""
}).join("")

console.log(example)
console.log(ignoredNumbers)
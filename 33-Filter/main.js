let names = ["ahmed", "esamil", "mohamed", "ayman"]
let numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// filter returns a new array

// filtering names
let filteredNamesArrow = names.filter((name) => name.startsWith('a'))
let filteredNamesNormal = names.filter(function(name) {
    // if function returend true -> the element will be added in the new array
    return name.startsWith("a")
})

console.log(filteredNamesArrow)
console.log(filteredNamesNormal)


// filtering numbers
let evenNumberNormal = numbers.filter(function(num) {
    return num % 2 == 0
})
let evenNumberArrow = numbers.filter((num) => (num % 2 == 0))

console.log(evenNumberArrow)
console.log(evenNumberNormal)

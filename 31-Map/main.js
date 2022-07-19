// map returns a new array

let array = [1, 3, 5, 7]

// index and array are optional
// with anonymous function
let mappedArray = array.map(function(element, index, array) {
    console.log(`element = ${element}
            index = ${index} 
            array = ${array}
            this = ${this}`)
    return element * 2
})

console.log(mappedArray)


function makeDouble(number) {
    return number * 2
}
 
// with named function
let mappedArrayWithNamedFunction = array.map(makeDouble)
console.log(mappedArrayWithNamedFunction)

// original array is the same
console.log(array)



 
function separate(title="") {
    console.log(`-----------${title}---------------`)
}
let myArray = ["boody", "ahmed", "hamdy", "hassan", "nasr"]

separate("slicing using slice() returns a new array -- don't change the original array")// end index isn't included

console.log(myArray.slice()) // the whole array
console.log(myArray.slice(1)) // from index 1 to the end
console.log(myArray.slice(1, 3)) // from index 1 to index (3-1)

// negative values allowed in slice
console.log(myArray.slice(-2))
console.log(myArray.slice(-4, -2))


// using splice 
separate("using splice() -> changes the original array")
myArray.splice(0, 0, "omar") // from index 0 delete 0 elements and add "omar"
console.log(myArray)

let aArray = [1, 2, 3]
let bArray = [4, 5, 6]
let cArray = [7, 8, 9]

separate("concat arrays")
let newArray = aArray.concat(bArray, cArray)
console.log(newArray)

// 
separate("join") // returns a string of array members with passed separator
console.log(newArray.join())
console.log(newArray.join(""))
console.log(newArray.join("-->"))






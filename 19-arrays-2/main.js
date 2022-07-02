function separate(title = "") {
    console.log(`----------${title}-------------`)
}

separate("original array")
let friends = ["boody", "ahmed", "hamdy"]
console.log(friends)


separate("unshift() to add in the beggining of the array")
friends.unshift("firstUsingUnshift()") // can add more than one item
console.log(friends)


separate("push() to add in the last")
// like append in python and push in the Stack dataStructure
friends.push("lastUsingPush()") // can add more than one item
console.log(friends)


separate("shift() to remove from the beggining of the array")
friends.shift() // can add more than one item
console.log(friends)


separate("pop() to remove from the end of the array")
friends.pop() // can add more than one item
console.log(friends)

separate("SEARCHING")
separate("indexOf() from left to right")
console.log(friends.indexOf("ahmed")) // the index if found
console.log(friends.indexOf("boody", 1)) // start searching from index 1
console.log(friends.indexOf("hassan")) // -1 if not found


// from last to the end
separate("lastIndexOf() from right to left")
console.log(friends.indexOf("ahmed")) // the index if found
console.log(friends.indexOf("boody", 1)) // start searching from index 1
console.log(friends.indexOf("hassan")) // -1 if not found


separate("includes()")
console.log(friends.includes("ahmed"))
console.log(friends.includes("hassan"))


separate("SORTING")
separate("sort() things alphabitically -- as they are strings -> deep sort")
let numbers = [2, 443, 55, 4, 75, 14]
console.log(numbers)
console.log(numbers.sort()) // deep sort

separate("reverse()")
console.log(numbers.reverse())



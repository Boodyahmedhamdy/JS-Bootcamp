let price = 100
let hasDiscount = true
let discountAmount = 30

if (hasDiscount === true) {
    // price -= discountAmount
    price = price - discountAmount
}

console.log(`price is ${price}$`)

let theName = "boody"
let gender = "female"
let prefix = gender === "male" ? "Mr." : "Ms."

console.log(`${prefix} ${theName}`)

// logical or || works with any falsy value
let person = "" // empty string is falsy value
console.log(`${person || "person in string"}`)

person = null || undefined
// nullish operator works with null and undefined only
console.log(`${person ?? "person is null or undefined"}`)

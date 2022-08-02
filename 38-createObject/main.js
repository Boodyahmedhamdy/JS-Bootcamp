// let user = {}
let user = new Object() // the same as the previous line
console.log(user)


// adding attributes
user.name = "ahmed"
user["age"] = 20

console.log(user)

// adding methods
user.sayHello = function () {
    return `hello, ${this.name}`
}

console.log(user)

// create object using create method
let emptyObj = Object.create({})
let obj = Object.create(user)

// seems empty but everything is found in __proto__
console.log(emptyObj)
console.log(obj)

obj.name = "obj"
console.log(obj.sayHello())

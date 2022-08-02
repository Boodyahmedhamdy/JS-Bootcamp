
let user = {
    // attributes
    theName: "boody", 
    theAge: 20, 
    theAdress: "Egypt",
    "strang proberty": "strang",
    200: 100,
    // methods
    sayHello: function() {
        console.log(`hello, my name is ${this.theName}`)
    },
}

console.log(user)
console.log(user.theName)
console.log(user[200])
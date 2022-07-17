// var isn't block scooped

var x = 10

if(true) {
    var x = 30
}

console.log(x) // should be 10 but found 30 because var isn't block scooped

// let and const are block scooped
let y = 10
if(true) {
    let y = 22 // only in 'if' scoop
}
console.log(y) // 10

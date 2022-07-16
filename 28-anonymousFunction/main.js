// old function
// can be called before creating it
console.log(sum(1, 2))

function sum(n, m) {
    return n + m ;
} 

console.log(sum(1, 2))

// anonymous function in variable

// can't be called before intializing the variable
let summer = function (n, m) {
    return n + m
}

console.log(summer)
console.log(summer(1, 2))
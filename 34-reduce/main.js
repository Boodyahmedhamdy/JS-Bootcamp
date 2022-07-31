let nums = [1, 3, 5, 7] // sum is 16

let sum = nums.reduce(function(acc, current, index, arr) {
    console.log(acc, current, index, arr)
},22) // 22 is the initial value

sum = nums.reduce(function(acc, current) {
    console.log(acc, current)
    return acc + current
})
console.log(`the summition of ${nums} is ${sum}`)

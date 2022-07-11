function sum(...numbers) {
    let sum = 0
    for(let i = 0 ; i < numbers.length ; i++) {
        sum = sum + numbers[i]
    }
    return sum
}

console.log(sum(2, 3, 4, 2))
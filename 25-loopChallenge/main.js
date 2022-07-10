let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]

let employees = ["Amgad", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"]

function arrayWithoutStop(array) {
    let newArray = []
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] === "Stop") {
            break
        }
        newArray.push(array[i])
    }
    return newArray
}

admins = arrayWithoutStop(admins)

// number of admins and employees
document.write(`<div>we have ${admins.length} admins</div>`)
document.write(`<div>we have ${employees.length} employees</div>`)


for (let i = 0 ; i < admins.length ; i++) {
    document.write(`<h2> ${admins[i]} </h2>`)
    for (let j = 0 ; j < employees.length ; j++) {
        if (admins[i][0] === employees[j][0])
        document.write(`<p> -${employees[j]} </p>`)
    }   
}




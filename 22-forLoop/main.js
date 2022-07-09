function separate(title = "") {
    console.log(`--------${title}----------------`)
}


let myArray = [1, 4, 564, 3, 24, 5]
let myString = "hello"

console.log(myArray, myString)

separate("old school for loop")
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
for (let i = 0 ; i < myString.length; i++) {
    console.log(myString[i])
}
// writing in document
document.write("<h1>multiplication table</h1>")
for (let i = 1 ; i < 13 ; i++) {
    for(let j = 1 ; j < 13 ; j++) {
        document.write(`${i * j}  `)
    }
    document.write("<br><hr>")
}

separate("label")
mainLoop: for(let i = 0 ; i < myString.length ; i++) {
    console.log(myString[i])
    nestedLoop: for(let j = 0 ; j <myString.length; j++) {
        if(myString[j] === 'l') {
            break mainLoop;
        }
        console.log(myString[j])
    }
}

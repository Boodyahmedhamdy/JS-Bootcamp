let mainSection = document.querySelector(".main-section")

console.log(mainSection)

// direct children -- only elements
console.log(mainSection.children)


let firstBox = mainSection.children[0]
console.log(firstBox)


// only elements children
console.log(firstBox.children)

// everything --> new line is a text node
console.log(firstBox.childNodes)

// first child whatever it's type
console.log(firstBox.firstChild)

// last child whatever it's type
console.log(firstBox.lastChild)

// the first element
console.log(firstBox.firstElementChild)


// the last element
console.log(firstBox.lastElementChild)





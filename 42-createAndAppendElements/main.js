// create a new elemnet
let myElement = document.createElement("div")
let myText = document.createTextNode("this is a created text")
let myComment = document.createComment("this is a comment")

// add className
myElement.className = "main-section"

// add new attribute
myElement.setAttribute("custom", "custom-value")

// another way to add new attribute
myElement.setAttributeNode(
    document.createAttribute("leader")
) // this function takes Attr datatype

// append text to the div
myElement.appendChild(myText)

// append comment to the div
myElement.appendChild(myComment)

// append the div to the body to be shown
document.body.appendChild(myElement)



console.log(myElement)
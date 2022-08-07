let header1 = document.querySelector(".main-section h1")
console.log(header1.innerHTML) // the real html code
console.log(header1.textContent) // the showen content

header1.innerHTML = `hello, <i>Boody</i>` // will make boody italic
header1.textContent = `hello, <i>Boody</i>` // just write a string
// add attribute
header1.title = "something"
header1.id = "bigHeader"



let theBox = document.getElementsByClassName("box")[0]
console.log(theBox.innerHTML)
console.log(theBox.textContent)
// another way to add attributes
console.log(theBox.getAttribute("class"))
console.log(theBox.getAttribute("id"))

// another way to set attrbutes
theBox.setAttribute("id", "thebox")




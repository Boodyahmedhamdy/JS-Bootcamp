// get by id
let myDivUsingId = document.getElementById("my-div")
console.log(myDivUsingId)

// get by tagname
// all paragraphs in the page
let myParagraphsUsingTagName = document.getElementsByTagName("p")
console.log(myParagraphsUsingTagName)

// get by className 
// all elements with class my-span
let mySpansUsingClassName = document.getElementsByClassName("my-span")
console.log(mySpansUsingClassName)

// get by queryselector
// the first one it meets
let myInsiderParagraphUsingQuerySelector = document.querySelector(".main-section .box p")
console.log(myInsiderParagraphUsingQuerySelector)

// get all elements
let myInsiderParagraphsUsingQuerySelector = document.querySelectorAll(".main-section .box p")
console.log(myInsiderParagraphsUsingQuerySelector)


// page title
let pageTitle = document.title
console.log(pageTitle)


// all forms
let forms = document.forms
console.log(forms)


// all links
console.log(document.links) // no links -> empty array



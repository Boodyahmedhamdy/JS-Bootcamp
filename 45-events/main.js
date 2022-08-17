let myButton = document.getElementById("mybtn")
let input = document.getElementById("name")
// click
myButton.onclick = function() {
    console.log("clicked")
}

// right click
myButton.oncontextmenu = function() {
    console.log("right clicked")
}

// mouse is on the button
myButton.onmouseenter = function() {
    console.log("the mouse is on the button")
}

// mouse left the button
myButton.onmouseleave = function() {
    console.log("the mouse just left")
}

// double click
myButton.ondblclick = function() {
    console.log("double clicked")
}

// scrolling
window.onscroll = function() {
    console.log("scrolling")
}

// resize 
window.onresize = function() {
    console.log("resizing")
}

// on click on text field
input.onfocus = function() {
    console.log("foucusing on the name")
}

// on clicking outside the field
input.onblur = function() {
    console.log("got out from the field")
}


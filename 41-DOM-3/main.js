let p = document.querySelector("p")

console.log(`attirubes of p are ${p.attributes}`)
console.log(p.attributes)

// has attribute
if (p.hasAttribute("leader")) {
    console.log(`p is the leader`)
} else {
    console.log("p isn't the leader")
}

// has attributes
// true if the element has any attributes
if(document.querySelector("body").hasAttributes()) {
    console.log("body has attribtues")
}else { 
    console.log("the body has no attributes")
}

// to remove attribute
// if(p.hasAttribute("active")) {
//     p.removeAttribute("active")
// }

let removeAttributeButton = document.getElementById("removeAttributeButton")
removeAttributeButton.onclick = function() {

    if(p.hasAttribute("leader")) {
        p.removeAttribute("leader")
    }

}

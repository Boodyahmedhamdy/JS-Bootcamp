let mainSection = document.getElementsByClassName("main-section")[0]

function createProducts(n = 1) {
    for(let i = 0 ; i < n ; i++) {
        let theProduct = document.createElement("div")

        // adding class name
        theProduct.className = "box"

        // adding heading to the product
        let theProductHeading = document.createElement("h3")
        theProductHeading.textContent = "this is heading"
        theProduct.appendChild(theProductHeading)

        // adding content
        let theProductContent = document.createTextNode("this is the product information")
        theProduct.appendChild(theProductContent)

        // append product to main-section
        mainSection.appendChild(theProduct)
    }
}
createProducts()

let createProductButton = document.getElementById("createProduct")
createProductButton.onclick = function() {
    createProducts()
}






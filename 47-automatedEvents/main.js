let inputs = document.querySelector(".inputs").children
console.log(inputs)

window.onload = function () {
    inputs[0].focus();
    for (let i = 1 ; i < inputs.length-1 ; i++) {
        if(inputs[i].value.length === 1 ) {
            inputs[i].blur()
            inputs[i+1].focus()
        }
    }
}



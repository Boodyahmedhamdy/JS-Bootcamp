// random argument challenge

function showDetails(a, b, c) {
    let theName = ""
    let theAge = 0
    let theStatus = false


    theName =
    typeof(a) === "string" ? a : 
    typeof(b) === "string" ? b : 
    c
    
    theAge =
    typeof(a) === "number" ? a :
    typeof(b) === "number" ? b : 
    c
    
    theStatus = 
    typeof(a) === "boolean" ? a : 
    typeof(b) === "boolean" ? b : 
    c

    // this line for debugging purpose
    // console.log(theName, theAge, theStatus)

    let statusMessage = 
    theStatus === true ?
    "you are available for work" : 
    "you are not available for work"

    // final output
    document.write(
        `<p>    
            hello ${theName}, 
            your age is ${theAge}
            ${statusMessage}
        </p>`
    )

}
showDetails("a", 0, true)
showDetails(9, false, "c")
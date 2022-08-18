// get the form 
document.forms[0].onsubmit = function(event) {
    // console.log(event)

    let isUserNameValid = false
    let isPasswordValid = false

    let userNameFeild = document.querySelector("[name='username']")
    let passwordFeild = document.querySelector("[name='password']")

    let username = userNameFeild.value
    let password = passwordFeild.value
    // console.log(userNameFeild, passwordFeild)

    console.log(`username = ${userNameFeild.value}`)
    console.log(`username length = ${userNameFeild.value.length}`)

    if(username !== "" && username.length <= 10) {
        console.log(`${username} is valid username`)
        isUserNameValid = true
    }

    if (password !== "") {
        console.log(`${password} is valid password`)
        isPasswordValid = true
    }



    if(isPasswordValid === false || isUserNameValid === false) {
        event.preventDefault();
        console.log("please fill in fields using roles")
    }


    // event.preventDefault(); to prevent sending
}
function separate(title = "") {
    console.log(`-------------${title}----------------`)
}

let myFriends = [
    "ahmed",
    "esamil",
    "mohamed", 
    [
        "morsy", 
        "hamdy"
    ]
]
console.log(`my first friend is ${myFriends[0].toUpperCase()}`)


separate("nested arrays")
console.log(myFriends[3])
console.log(myFriends[myFriends.length-1][1])
console.log((myFriends[myFriends.length-1][myFriends[myFriends.length-1].length-1])[myFriends[myFriends.length-1][myFriends[myFriends.length-1].length-1].length-1])


separate("Array.isArray()")
console.log(Array.isArray(myFriends))




function separate(title = "") {
    console.log(`--------------${title}------------------`);
}

// unary operator returns number of another datatype
console.log(100);
console.log(typeof "100", "100");

// single plus before element
console.log(+100);
console.log(typeof +100);


// number in string
separate("number in string");
console.log(+"100");
console.log(typeof +"100");
console.log("-100");
console.log(typeof +"-100");


// string
separate("string");
console.log(+"boody");
console.log(typeof +"boody");


// hexdicimal in string
separate("hexadicimal in String");
console.log(+"0xFF"); // 255
console.log(+0xFF); // 255


// boolean
separate("boolean");
console.log(+true);
console.log(+false);
console.log(+"false");
console.log(+"true");


// null
separate("null");
console.log(+null);


// THE SAME THING HAPPENS WITH - 
// BUT RETURNS NUMBER IN NEGATIVE
// in case of 0 --> will return -0




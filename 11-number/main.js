function separate(title = "") {
    console.log(`--------------${title}------------------`);
}

separate("underscroes to make numbers cleaner");
console.log(100000000);
console.log(100_000_000);
console.log(1e8); // one then 8 zeros
console.log(10**8);


separate("limits in JavaScript");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_SAFE_INTEGER);


separate("toString()");
console.log(322); // number
console.log(1223..toString()) // two dots to call method, one dot to add fraction
console.log((322).toString()); // string


separate("toFixed()");
console.log(22.3235543)
console.log(22.3235543.toFixed(3)) // show 3 digits after the point - it's string


separate("parseInt()");
console.log("212"); 
console.log(parseInt("231")); // return int
console.log(parseInt("boody 23"));
console.log(parseInt("23 boody"));


separate("parseFloat()");
console.log(11.2);
console.log(parseFloat("11.34"));


separate("isInteger()");
console.log(Number.isInteger("32"));
console.log(Number.isInteger(32.43));
console.log(Number.isInteger(32));


separate("isNaN()");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("boody"));
console.log(Number.isNaN("boody" / 21));


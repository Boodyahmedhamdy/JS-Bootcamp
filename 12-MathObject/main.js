function separate(title = "") {
    console.log(`--------------${title}------------------`);
}

separate("round()"); // normal math
console.log(Math.round(23.223));
console.log(Math.round(23.62));


separate("ciel()"); // to up
console.log(Math.ceil(1.4));
console.log(Math.ceil(1.1));
console.log(Math.ceil(1.001));


separate("floor()"); // to down
console.log(Math.floor(1.2))
console.log(Math.floor(1.99))
console.log(Math.floor(1.9))


separate("min()");
console.log(Math.min(22, 4, 42, -21, 66, 2, 0));


separate("max()");
console.log(Math.max(22, 4, 42, -21, 66, 2, 0));


separate("pow()");
console.log(Math.pow(3, 3));
console.log(3 ** 3);


separate("random()");
console.log(Math.random())


separate("trunc()"); // returns the int part
console.log(Math.trunc(33.9));

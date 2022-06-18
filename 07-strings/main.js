let a = "we love";
let b = "javascript";
let c = "and";
let d = "programming";

// old way in concatination
// --------------------------------
console.log(a + " " + b + " " + c + " " + d);

// add new line by \n
console.log(a + " " + b + "\n" + c + " " + d);

// like python only on console.log()
console.log(a, b, c, d);

// new way
// --------------------------
console.log(`${a} ${b} ${c} ${d}`);

// add new line normally
console.log(`${a} ${b}
${c} ${d}`);

// single and double qoutes added normally without backslash
// backslash should be prefixed with \ and also `
console.log(`${a} "" ${b} '' ${c} \\ ${d}\` `);


// test in realworld
// --------------------------
let title = "hello";
let discription = "some discription";

let markUp = `
    <div class="card">
        <div class="content">
            <h2>${title}</h2>
            <p>${discription}</p>
        </div>
    </div>
`;
document.write(markUp);


// challenge
// ----------------------

let cardTitle, cardDiscreption, cardDate;

cardTitle = `Elzero`;
cardDiscreption = `Elzero Web School`;
cardDate = `25/10`;

let card = `
<div class="card">
        <h3>hello, ${cardTitle}</h3>
        <p>${cardDiscreption}</p>
        <span>${cardDate}</span>
</div>
`;
let timesToRepeat = 4
for (let i = 0; i < timesToRepeat; i++) {
    document.write(card);
}

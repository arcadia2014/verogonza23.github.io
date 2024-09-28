// hi i'm francisco and i'm from huamantla
const name = "francisco";
const city = "huamantla";

console.log("hi i'm fro" + name + "and i'm from" + city);
console.log('hi i\'m' + name + 'and i\'m from' + city);

//template literate
console.log(`hi! i'm ${ name } and i'm from ${city}`);

//template literals
console.log(`hi  i'm ${name}
    i'm from ${city}`);

const message = `hi! i'm ${name} i'm from ${city}`;

console.log(message.longth);
console.log(message.toUpperCase);
console.log(message.toLocaleLowerCase);
console.log(message.includes('from'));
console.log(message.startsWith('hi!'));
console.log(message.indexOf("francisco"));

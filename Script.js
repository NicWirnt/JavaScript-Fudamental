/*let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("Nico");
console.log(23);

let firstName = "Nico";
console.log(firstName);

let AUTHOR = "Nico";

let myFirstJob = 'Programmer';
let myCurrentJob = 'Retailer';

console.log(myFirstJob);

// true;
// console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Nico');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

console.log(typeof null); */

// let age = 27;
// age = 31;

// const birthYear = 1994;
// birthYear = 2000;
// const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Wiranata';
// console.log(lastName);

//math operators
// const now = 2037;
// const ageNico = now - 1994;
// const ageEllen = now - 2018;
// console.log(ageNico, ageEllen);

// console.log(ageNico * 2, ageNico / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 3 * 3

// const firstName = 'Nico';
// const lastName = 'Wiranata';
// console.log(firstName + ' ' + lastName);

// //assigment operators
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x * 4;
// x++; //x = x+1
// x--;
// x--;
// console.log(x);

// //comparison operators
// console.log(ageNico > ageEllen); // >, <, >=, <=
// console.log(ageEllen >= 18);

// const isFullAge = ageEllen >= 18;

// console.log(now - 1991 > now - 2018);

/*const now = 2037;
const ageNico = now - 1994;
const ageEllen = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10;
console.log(x, y);

const averageAge = (ageNico + ageEllen) / 2;
console.log(ageNico, ageEllen, averageAge);*/

/*const firstName = 'Nico';
const job = 'retailer';
const birthYear = 1994;
const year = 2037

const nico = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(nico);

const nicoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nicoNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);*/

/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license ????????');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ????`);
}

const birhtYear = 2012;

let century;
if (birhtYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);*/

//type of conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Nico'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //11 because string converted
n = n - 1;
console.log(n);
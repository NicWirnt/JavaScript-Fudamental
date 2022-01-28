let heightMark = 1.69;
let massMark = 78;
let heightJohn = 1.95;
let massJohn = 92;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);

/*massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);*/

if (markHigherBMI) {
    console.log(`"Mark BMI ${bmiMark} is hihgher than John's ${bmiJohn}"`);
} else {
    console.log(`John BMI ${bmiJohn} is higher than Mark's ${bmiMark}`);
};


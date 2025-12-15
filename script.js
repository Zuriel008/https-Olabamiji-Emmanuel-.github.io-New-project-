// INTRODUCTION TO JS*/

`use strict`;

// TUTORIAL CODE

let js = "amazing";
console.log(20 + 20 + 49);

let javascript = true;
console.log(typeof javascript);

javascript = "YES";
console.log(typeof javascript);

// FIRST CCODING CHALLENGE*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// console.log(BMIMark);

// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIJohn);

// const markHigherBMI = BMIMark >= BMIJohn;
// console.log(markHigherBMI);

//console.log(`Just a regular string...`);  backticks*/

// IF AND ELSE STATEMENTS*/
// const age = 15;
// if (age >= 18) {
//   console.log(`Sarah can start driving license`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, Wait another ${yearsLeft} years`);
// }

// const birthYear = 2008;

// let year;
// if (birthYear >= 2001) {
//   year = "Genz";
// } else {
//   year = Millenia;
// }
// console.log(year);

// const BMIMark = 28.3;
// const BMIJohn = 23.9;

// let birth;

// if (BMIMark >= BMIJohn) {
//   birth = `Mark's BMI is greater than John's`;
// } else {
//   birth = "John's BMI is greater than mark's";
// }

// console.log(birth);

// TYPE CONVERSION AND COERCION*/

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 20);

// console.log(Number(`Emmanuel`));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log(`I am ` + 23 + ` years old`);
// console.log(`23` + `10` + 3);
// console.log(`23` - `10` - 3);

// EQUALITY OPERATORS
// strict (===)
// loose(==)
// const day = `18`;
// if (day === 18) console.log(`you just became an adult(strict)`);

// if (day == 18) console.log(`You just became an adult(loose)`);

// const favourite = Number(prompt(`whats your favourtite number?`));
// console.log(favourite);

// if (favourite === 23) {
//   console.log(`cool is an amazing number`);
// } else if (favourite === 7) {
//   console.log(`7 is also a cool number`);
// } else [console.log(`Number is not 23 0r 7`)];

// LOGICAL OPERATORS AND, OR, NOT
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision); // and
console.log(hasDriversLicense || hasGoodVision); // or
console.log(!hasDriversLicense); //NOT

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}

// CODING CHALLENGE
const dolphins = (96 + 108 + 89) / 3;
console.log(dolphins);

const koalas = (88 + 91 + 110) / 3;
console.log(koalas);

if (dolphins > koalas) {
  console.log(`Dolphins scored higher`);
} else {
  console.log(`Koalas scored higher`);
}

const dolphin = Number(97 + 112 + 81) / 3;
console.log(dolphin);

const koala = Number(109 + 95 + 86) / 3;
console.log(koala);

if (koala > dolphin && koala >= 100) {
  console.log(`koala wins`);
} else if (koala < dolphin && koala >= 100) {
  console.log(`koala is bigger than dolphin`);
} else if (dolphin === koala && dolphin >= 100 && koala >= 100) {
  console.log(`Both win the trophy`);
} else {
  console.log(`No one wins the trophy 🥲`);
}

// THE SWITCH STATEMENT
// const day = `sunday`;

// switch (day) {
//   case `monday`:
//     console.log(`plan a course structure`);
//     break;
//   case `tuesday`:
//     console.log(`prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples`);
//     break;
//   case `friday`:
//     console.log(`record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

// USINIG  THE IF/ELSE STATEMENT TO WRITE THE SAME LINE OF CODE AS ABOVE
const days = `monday`;

// if (days === `monday`) {
//   console.log(`plan a course structure`);
// } else if (days === `tuesday`) {
//   console.log(`prepare theory videos`);
// } else if (days === `wednesday` || days === `thursday`) {
//   console.log(`Write code examples`);
// } else if (days === `friday`) {
//   console.log(`record videos`);
// } else if (days === `saturday` || days === `sunday`) {
//   console.log(`Enjoy the weekend`);
// } else {
//   console.log(`Not a valid day!`);
// }

// THE TENARY CONDITIONAL STATEMENT
// const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 💧`);

//  CODING CHALLENGE

// const bill = 40;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// FUNCTIONS
// function logger() {
//   console.log(`My name is jonas`);
// }

// // reusing a funtion is called(calling / running / or invoking a function)
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// ARROW FUNCTIONS
const calcAge3 = (birthYear) => 2036 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2036 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));

// CALLING A FUNCTION INSIDE OF ANOTHER FUNCTION
const cutPieces = function (fruit) {
  return fruit * 4;
};

const ruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(ruitProcessor(2, 3));

// Coding Challenge 2

const calcAverageDolphins = (a, b, c) => (a + b + c) / 3;
console.log(calcAverageDolphins(44, 23, 71));

const calcAverageKoalas = (a, b, c) => (a + b + c) / 3;
console.log(calcAverageKoalas(65, 54, 49));

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 46 to 56 points🎉`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins 56 to 46 points🎉`);
  } else {
    console.log(`No team wins🥲`);
  }
}

const realWinner = checkWinner(46, 56);

const calcAverageDolphins2 = (a, b, c) => (a + b + c) / 3;
console.log(calcAverageDolphins(85, 54, 41));

const calcAverageKoalas2 = (a, b, c) => (a + b + c) / 3;
console.log(calcAverageKoalas(23, 34, 27));

function checkWinner2(avgDolphins2, avgKoalas2) {
  if (avgDolphins2 >= avgKoalas2) {
    console.log(`Dolphins win 68 to 28 points🎉`);
  } else {
    console.log(`Koalas wins 28 to 68 points🎉`);
  }
}

const realWinner2 = checkWinner2(68, 28);
// ARRAYS
const friends = [`messi`, `ronaldo`, `Lamine`, `Neymar`];
console.log(friends);

// second method of writing arrays
const years = new Array(2007, 2008, 2009);

// Way of using a value stored in an Array
console.log(friends[2]);
console.log(friends[1]);

// ADD ELEMENTS TO ARRAYS
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); //LAST
console.log(friends);

friends.shift(); //FIRST
console.log(friends);

console.log(friends.indexOf(`Lamine`));
console.log(friends.indexOf(`bob`));

friends.push(23);
console.log(friends.includes(`Lamine`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

//coding challenge

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// const calcTip = function (bill) {
//   return (bill = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// INTRODUCTION TO OBJECTS
// const emmanuel = {
//   firstName: `Emmanuel`,
//   lastName: `Olabamiji`,
//   age: 2025 - 2008,
//   birthYear: 2008,
//   job: `programmer & medical doctor`,
//   friends: [`gideon`, `shalom`, `doyin`, `muiz`],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
//   },
// };

// // DOTS VS BRACKET NOTATION(ways of getting a value from an oject )
// console.log(emmanuel.age); //dot method
// console.log(emmanuel[`firstName`]); //Bracket Method

// const interestedIn = prompt(
//   `What do you want to know about Emmanuel? Choose between firstName, lastName, age, job, and friends`
// );

// if (emmanuel[interestedIn]) {
//   console.log(emmanuel[interestedIn]);
// } else {
//   console.log(
//     `wrong request! Choose between firstName, lastName, age, job, and friends`
//   );
// }

// emmanuel.location = `nigeria`;
// emmanuel[`linkdeln`] = `@olabamjiemmanuel`;

// //CHALLENGE 1
// console.log(`
//   ${emmanuel.firstName} has ${emmanuel.friends.length} friends  , and his best friend is called ${emmanuel.friends[0]} `);

// //CHALLENGE 2
// console.log(emmanuel.getSummary());

//CHALLENGE 3
const markMiller = {
  firstName: `Mark`,
  lastName: `Miller`,
  massMark: 78,
  heightMark: 1.69,

  calcBMIMark: function () {
    this.bmi = this.massMark / this.heightMark ** 2;
    return this.bmi;
  },

  resultMark: function () {
    return `${
      this.firstName
    } BMI ${markMiller.calcBMIMark()} is higher than John BMI ${johnSmith.calcBMIJohn()}`;
  },
};

const johnSmith = {
  firstName: `John`,
  lastName: `Smith`,
  massJohn: 92,
  heightMark: 1.95,

  calcBMIJohn: function () {
    this.bmi = this.massJohn / this.heightMark ** 2;
    return this.bmi;
  },

  resultJohn: function () {
    return `${
      this.firstName
    } BMI ${johnSmith.calcBMIJohn()} is higher than Mark BMI ${markMiller.calcBMIMark()}`;
  },
};

markMiller.calcBMIMark();
johnSmith.calcBMIJohn();

console.log(markMiller.bmi, johnSmith.bmi);

console.log(
  markMiller.calcBMIMark() >= johnSmith.calcBMIJohn()
    ? markMiller.resultMark()
    : johnSmith.resultJohn()
);

//LOOPS
// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋️`);
// }

// // LOOPING ARRAYS
// const emmanuel = [
//   `Emmanuel`,
//   `Olabamiji`,
//   2025 - 2008,
//   2008,
//   `programmer & medical doctor`,
//   [`gideon`, `shalom`, `doyin`, `muiz`],
// ];

// const types = [];

// for (let i = 0; i < emmanuel.length; i++) {
//   //Reading from emmanuel array
//   console.log(emmanuel[i], typeof emmanuel[i]);

//FILLING TYPES ARRAY
//types[i] = typeof emmanuel[i] method 1

//   types.push(typeof emmanuel[i]);
// }

// console.log(types);

// const year = [1991, 2007, 1969, 2020];
// const age = [];

// for (let i = 0; i < year.length; i++) {
//   age.push(2037 - year[i]);
// }
// console.log(age);

// //CONTINUE AND BREAK
// console.log(`----ONLY STRING---`);
// for (let i = 0; i < emmanuel.length; i++) {
//   if (typeof emmanuel[i] !== `string`) continue;

//   console.log(emmanuel[i], typeof emmanuel[i]);
// }

// console.log(`----BREAK WITH NUMBER---`);
// for (let i = 0; i < emmanuel.length; i++) {
//   if (typeof emmanuel[i] === `number`) break;

//   console.log(emmanuel[i], typeof emmanuel[i]);
// }

// LOOPING BACKWARDS AND LOoPS IN LOOPS
const jonas = [
  `jonas`,
  `schmedtman`,
  2037 - 1991,
  `teacher`,
  [`micheal`, `Peter`, `steven`],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

// THE WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice} `);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end....`);
}

// CHALLENGE4

const calcTip = function (bill) {
  return (bill = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2);
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

for (let i = 0; i <= bills.length; i++) {
  const tips = calcTip(bills[i]);
  tip.push(tips);
  total.push(tips + bills[i]);
}
console.log(tip, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tip));

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriversLicense = true;
// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('I can drive :D')


// Functions

// function logger() {
//     console.log('This string is in logger function');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function with parameters

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function declarations

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge(1999);
// console.log(age1);

// function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1999);
// console.log(age1, age2)

// Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1999, 'Aatif'));
// console.log(yearsUntilRetirement(1990, 'John'));

// Function calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Reviewing functions

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1950, 'Aatif'));
*/

// Challenge 01 - Function
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

// Arrays

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'John'
const john = [firstName, 'Doe', 2037 - 1991, 'teacher', friends];
console.log(john);
console.log(john.length);

// Exercise 

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1984, 2008, 2020, 2018];

// const age = years[0] + years[2];
// console.log(age);

const age = calcAge(years[0]);
console.log(age);
*/

// Array Methods

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements 
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// removing elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

// position / location of array element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// checking if element is in the array

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

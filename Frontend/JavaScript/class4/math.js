// Math in Javascript
// Math is an in-built mathematical operation in JS.
let num1 = 25;
let num2 = 55.05;
// let addition = num1 + num2;
// console.log(addition); // 80.05

//Round
// console.log(Math.round(addition));
// console.log(Math.round(12.000023));
// console.log(Math.PI); //3.141592653589793

//Square root
// console.log(num1 ** 2); //625
// console.log(num1 ** 3); //15625
// console.log(Math.pow(9, 2)); //81
// console.log(Math.pow(5, 3)); // 125
// console.log(Math.sqrt(16)); //Square root i.e 4
// console.log(Math.sqrt(81)); //9

//ceil -> it always calculate the highest round of value of a number means
// console.log(Math.ceil(4.2)); //5
// console.log(Math.ceil(6.87)); //7

//floor ->it calculate the lowest approximate value of a number means
// console.log(Math.floor(4.7)); //4
// console.log(Math.floor(5.89)); //5

// console.log(Math.ceil(325.49)); // 326
// console.log(Math.floor(325.49)); // 325
// console.log(Math.ceil(325.01)); //326
// console.log(Math.floor(325.01)); //325

//Round
// console.log(Math.round(325.4)); // 325
// console.log(Math.round(325.5)); // 326
// console.log(Math.round(325.8)); // 326

//Max
// console.log(Math.max(20, 67, 90, 56, 34, 10)); //90
// console.log(Math.max(34, 6, 89, 67, 92, 107)); //107

//min
// console.log(Math.min(20, 67, 90, 56, 34, 10)); //10
// console.log(Math.min(34, 6, 89, 67, 92, 107)); //6

//Absolute
// console.log(Math.abs(-10)); //10
// console.log(Math.abs(-0.00005)); //0.00005

//Random(0 to 1) -> this method is basically pick the random number from 0 to 1 range how many number of possiblity.
// console.log(Math.random()); //0.5584697101870995
// console.log(Math.random()); //0.4605132170154882
// console.log(Math.random()); //0.682522932842861
// console.log(Math.random()); //0.4893735228581293

// Write a program to print the random numbers between 5 to 27 (starting number is included and end number is excluded)
// let start = 5;
// let end = 27;
//((end-start)+1) ->to find out the number
// let totalNumbers = end - start + 1; //23
// console.log(Math.random() * totalNumbers);
// console.log(Math.random() * totalNumbers);
// console.log(Math.random() * totalNumbers);
// console.log(Math.random() * totalNumbers);

// Dates
// to create date object

let date = new Date();
console.log(date); //2024-10-16T03:21:29.221Z
console.log(date.toISOString()); //

console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 9 (it should be 10)
console.log(date.getMonth() + 1); // 10 --> October
console.log(date.getDate()); // 16
console.log(date.getHours()); // 11
console.log(date.getMinutes()); //
console.log(date.getSeconds()); //
console.log(date.getDay()); // 3 -->wednesday

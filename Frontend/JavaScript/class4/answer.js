// Basic questions->
//Q.1:what does math.floor() do in javascript ?
//ANS: Math.floor() is predefined function in javascript,used to rounds down to an integer which is just previous or equal to the given number
//ex:
console.log(Math.floor(12.3)); //12
console.log(Math.floor(-9.8)); //-10

//  Q.2:
// How would you Generate random number between 1 -100
// Basically in JavaScript we use random() to generate a random number.Math.random() ,if we print this line then it will returns the random number between 0 -1 where 0 is inclusive and 1 is exclusive.This function always returns a floating-point number.

// Here the question is 1 - 100 so we can write console.log(Math.random()*101),this will print random number between 1 -100.As we know random () always return floating point number so to remove the floating point we can use floor method.
// let's see
let start = 1,
  end = 100;
let random_num = end - start + 1;
console.log(Math.random() * random_num);
console.log(Math.floor(Math.random() * random_num));

//Q.3-What is the purpose of Math.ceil()? Give an example.
// The Math.ceil() function in JavaScript is used to round a number up to the nearest integer. Even if the number is already an integer or very close to the next one, it will still be rounded up.
// It ensures the result is the smallest integer that is greater than or equal to the given number.

// If you want to calculate how many pages are required to display a list of items, using Math.ceil() ensures you get enough pages even if the items don’t perfectly fit into pages.
let totalItems = 47;
let itemsPerPage = 10;
let totalPages = Math.ceil(totalItems / itemsPerPage);
console.log(totalPages); // Output: 5

//Q4.Math.pow(2,3)
//Ans: used to find the power of a number.It takes two parameters one is base and another is component .Here 2 is base and 3 is component .This is read as 2 raised to the power of  3. Here the output is 8.
console.log(Math.pow(2, 3)); //8

//Q.5:What is the value of Math.PI?
console.log(Math.PI);
//the value is 3.141592653589793

//TASK->
//Task1: Generate a random number between 1 and 100.
let start1 = 1,
  end1 = 100;
let random_number = end1 - start1 + 1;
console.log(Math.random() * random_number); //  output will be in floating point number
console.log(Math.floor(Math.random() * random_number)); // to remove floating point number here i used floor()

// Task2: Round the number 6.75 down to the nearest integer.
console.log(Math.floor(6.75)); //6
// Task3: Round the number 9.12 up to the nearest integer.
console.log(Math.ceil(9.12)); //10
// Task4: Generate a random number between 5 and 27 (inclusive).
let start2 = 5;
let end2 = 27;
let total = end2 - start2 + 1; //23 i.e 0 -23
console.log(Math.floor(Math.random() * total)) + 5;

// Task5: Add 5 days to the current date.
let currentDays = new Date();
console.log(currentDays.getDay()); //3
console.log(currentDays.getDay() + 5); //8
currentDays.setDate(currentDays.getDate() + 5);
console.log(currentDays);
console.log("Jagannath");
// Task6: Get the number of milliseconds between January 1, 2023, and today.
let givenDate = new Date(2023, 1, 1);
console.log(givenDate);
let curDate = new Date();
console.log(curDate);
let result = curDate - givenDate;
console.log(result);

// Task7: Get the current hour.
let cur_hour = new Date();
console.log(cur_hour.getHours()); //15

// Task8: Create a date for January 1, 2025.
let date = new Date(); //current date
console.log(date);
let ans = new Date(2025, 1, 1);
console.log(ans);

// Task9: Get the current day of the week (0 for Sunday, 6 for Saturday).
let curDay = new Date();
console.log(curDay.getDay()); //3 wednesday

// Task10: Get the current month (0-11).
let curMonth = new Date();
console.log(curMonth.getMonth() + 1);
console.log(curMonth.getDate());

// Task11: What is the difference between getDate() and getDay()?
/*getDate() is a function which returns date of a month
    and getDay is a function which returns day of a week*/

//Exercise 1: Simple Calculator with a Loop

let a = parseInt(prompt("enter the 1st number:"));
let b = parseInt(prompt("enter the 2nd number:"));
let c = parseInt(prompt("enter the operation what you want i.e +,-,*,/,% "));

switch (c) {
  case "+":
    console.log("two number sum is=", a + b);
    break;
  case "-":
    console.log("two number substraction is=", a + b);
    break;
  case "*":
    console.log("two number multiplication is=", a * b);
    break;
  case "/":
    console.log("two number division is=", a / b);
    break;
  case "%":
    console.log("two number modulous is=", (a * b) / 100);
    break;
  default:
    console.log("invalid operation");
}

// Exercise 2: Guessing Game

let randomNumber = Math.random() * 100;
let number = Math.ceil(randomNumber);
// console.log(number); to check the number
while (true) {
  let GuessNumber = parseInt(prompt("Enter The Guess Number"));
  if (GuessNumber === number) {
    console.log("Congratulation ! you find the number " + number);
    break;
  } else if (GuessNumber < number) {
    console.log("Correct Number is Higher");
  } else if (GuessNumber > number) {
    console.log("Correct number is Lower");
  } else {
    console.log("Try again");
  }
}

//Exercise 3: Word Counter

let userInput = prompt("Enter your word");
let count = 0;
for (let i = 0; i < userInput.length; i++) {
  count++;
}
console.log("The total word in the userInput have = ", count);

// Exercise 4: Login Attempt Limit

let password = "Dinesh@123";

i = 1;
while (i <= 3) {
  let v = 4 - i;
  let Attempt = prompt(`Enter your password \nyou have only attemts:${v}`);
  if (password === Attempt) {
    console.log("Login Successfully");
    break;
  } else {
    console.log("Wrong password ");
    console.log("you have only attemts:", 3 - i);
  }

  i++;
}

//Iteration:

// Print from 1 to 10;
// let start_num = 1;
// let next_num1 = start_num + 1;
// let next_num2 = next_num1 + 1;
// let end_num = 10;
// console.log(start_num);
// console.log(end_num);
// console.log(next_num2);
// let num = 2;
// console.log(num);
// console.log(num);
// console.log(num);

//while loop:

// syntax:
// while (condition) {
// code to be executed
// }
//  ex:print from 1 to 10;
let num = 1; //declaration
console.log("global:", num); //print 1
while (num <= 10) {
  console.log("block:", num); //print
  num++;
}
console.log("global:", num); //print 11

//Do...while loop:
// syntax:
//Do{
//code to be executed
//}while(condition)
// ex: asking for user to the correct input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the capital of Odisha? ", (userAns) => {
  if (userAns.toLowerCase() === "bhubaneswar") {
    console.log("Correct! Bhubaneswar is the capital of Odisha.");
  } else {
    console.log("Incorrect. The correct answer is Bhubaneswar.");
  }
  rl.close();
});

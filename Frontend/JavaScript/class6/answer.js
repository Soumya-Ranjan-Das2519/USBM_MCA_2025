//Q1. Write a program that calculates the sum of all digits of a given number using a loop.

let num = 23456;
let sum = 0;
while (num > 0) {
  let rem = num % 10;
  sum = sum + rem;
  //num=num/10;
  num = Math.floor(num / 10); //Math.floor()remove the float number
}
console.log("the sum of the given number is:", sum);

//Q2. Print the Fibonacci series up to a given number of terms.
let n = 5;
let a = 0,
  b = 1;
for (let i = 1; i <= n; i++) {
  console.log(a); //0
  let nextNum = a + b; //0+1=1
  a = b; //means value of b assign to a.b=1 now a=1.
  b = nextNum; //b=value of nextNum
}
//Q3. Write a program that prints the multiplication table of a number using a for loop.
let num2 = 12;
console.log(`multiplication table of ${num2} is:`);
for (let i = 1; i <= 10; i++) {
  let result = i * num2;
  console.log(`${num2}*${i}=${result}`);
}
//Q4.Write a program that prints the first n prime numbers.

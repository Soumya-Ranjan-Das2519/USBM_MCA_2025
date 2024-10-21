//for loop
//syntax: for(initialization;condition;increment/decrement){
//code to be executed
//}

// exp:print the number b/w 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("reverse order:");
// exp:print the number b/w 5 to 1
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// task1:generate random numbers and add then upto 5 times
//console.log(Math.random());
let sum = 0;
let i = Math.random();
for (i; i <= 5; i++) {
  sum = sum + i;
  console.log(sum);
}
//another way
let sum1 = 0;
for (let ran = 0; ran <= 5; ran++) {
  let random = Math.floor(Math.random() * 10);
  let result = sum1 + random;
  console.log(`the sum of result is ${result}`);
}

//nested loop: a loop inside another loop

for (let i = 0; i <= 5; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(j);
  }
  console.log(i);
}

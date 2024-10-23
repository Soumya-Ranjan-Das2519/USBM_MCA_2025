//function:function is a reusable block of code to perform a specific task.

//declaration:javascript function declare through a keyword
//i.e function functionName(){
//executable code}

//Q:write a function to print your name.
function printName() {
  console.log(`my name is soumya Ranjan Das`);
}
printName(); //invokation or function call

//Arguments & parameters
function printName(name) {
  //parameter i.e variable that store the value
  console.log(`my name is ${name}`);
}
printName("soumya"); //argument i.e actual value

// function printName(name, age, city) {
//   console.log(`my name is ${name}`);
//   console.log(`my age is :${age}`);
//   console.log(`my city is :${city}`);
// }
// printName("soumya", 21, "bhubaneswar");

//return keyword
//stop the execution process.
//return the value to the caller.
function printName(name, age, city) {
  return `my name is ${name}.my age is ${age} and my city is ${city}`;
}
console.log(printName("soumya", 21, "bhubaneswar"));
// printName("soumya", 21, "bhubaneswar");
let output = printName("soumya", 21, "bhubaneswar");
console.log(output);

//function hoisting
//javascript function can be called before they are declared
printName("ranjan");
function printName(name) {
  return name;
}
//syntax:
console.log(printNm("soumya ranjan das")); //before
const printNm = (name) => {
  //=>:fat arrow
  return `my name is ${name}`;
};
console.log(printNm("soumya ranjan das")); //after

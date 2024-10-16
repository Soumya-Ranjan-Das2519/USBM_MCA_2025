// // mathematical operation
// let num1 = 45;
// let num2 = 15;
// let result = num1 + num2; //addition

// //multiplication
// let result1 = num1 * num2;
// //substraction
// let result2 = num1 - num2;
// //division
// let result3 = num1 / num2;
// //modulous-to find the remainder
// let result4 = num1 % num2;
// console.log(result, result1, result3, result4);

// let digit = 34;
// let odd = digit % 2;
// console.log(odd);

// let sqr = 2 ** 2; //square
// console.log(sqr);
// let qb = 2 ** 3;
// console.log(qb);

// //relational operator
// //to compare two values
// // '!' not operator
// // console.log(7 > 8);
// // console.log(9 < 78);
// // console.log(5 > 5);
// // console.log(5 >= 5);
// // console.log(10 > !5);
// // console.log(!5);

// //equality operator
// //'==' only check vale and '===' it check both value and datatype
// console.log(5 == 5); //true
// console.log(5 == 6); //false
// console.log(5 == "5"); //true
// console.log(5 === "5"); //false
// console.log(5 != "5"); //false
// console.log(5 !== "5"); //false

// //conditional statement
// //if(condition){
// //true code to be execute here}

// //falsy value
// //false,0,-0,"",``,'',null,undefined,NaN

// if (false) {
//   console.log("it is true");
// }
// if (" ") {
//   console.log("it is true");
// }

// let total_bill = 5999;
// console.log(`total bill=${total_bill}`);
// let discount_start_price = 2000;
// console.log(`discount offer start from ${discount_start_price}`);
// if (total_bill >= discount_start_price) {
//   console.log("done satisfied");
// } else {
//   console.log("not satisfied");
// }

// let gender = "male";
// let age = 25;
// if (gender === "male") {
//   if (age >= 22) {
//     console.log("then able to marry");
//   }
// } else {
//   console.log("not able to marry");
// }

// let age = 15;
// if (age >= 60) {
//   console.log("adult and senior");
// } else if (age >= 18) {
//   console.log("adult");
// } else {
//   console.log("minor");
// }

//logical operator
// "&&" -both true then true ,"||"-one of them is true then true,"!"-true=false and false=true;

// let char = "l";
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log("it is avowel");
// } else {
//   console.log("it ius not a vowel");
// }

// let char1 = "a";
// switch (char1) {
//   case "a": //value//
//     console.log("it is vowel");
//     break;
//   case "e":
//     console.log("it is vowel");
//     break;
//   case "i":
//     console.log("it is vowel");
//     break;
//   case "o":
//     console.log("it is vowel");
//     break;
//   case "u":
//     console.log("it is vowel");
//     break;

//   default:
//     console.log("it is not a vowel");
//     break;
// }

//to do the list of the week days
let days = 1;
switch (days) {
  case 1: //value//
    console.log("it is monday");
    break;
  case 2:
    console.log("it is tuseday");
    break;
  case 3:
    console.log("it is wednesday");
    break;
  case 4:
    console.log("it is thursday");
    break;
  case 5:
    console.log("it is friday");
    break;
  case 6:
    console.log("it is saturday");
    break;
  case 7:
    console.log("it is sunday");
    break;

  default:
    console.log("No more days except this");
    break;
}

//to do the one year of months are 12,if we type 1=january,2-february,....like this
let month = 1;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("no more than 12 months in a year");
    break;
}

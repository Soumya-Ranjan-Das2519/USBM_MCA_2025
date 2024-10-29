// In JavaScript, push(), pop(), shift(), and unshift() are methods used to manipulate arrays.

// 1. push():
// Definition: Adds one or more elements to the end of an array and returns the new length of the array.
// Example:
let fruit1 = ["apple", "banana"];
let newLength = fruit1.push("orange");
console.log(fruit1); // Output: ['apple', 'banana', 'orange']
console.log(newLength); // Output: 3

// 2. pop():
// Definition: Removes the last element from an array and returns that element. This method changes the length of the array.
// Example:
let fruit2 = ["apple", "banana", "orange"];
let lastFruit = fruit2.pop();
console.log(fruit2); // Output: ['apple', 'banana']
console.log(lastFruit); // Output: 'orange'
// 3. shift()
// Definition: Removes the first element from an array and returns that element. This method also changes the length of the array.
// Example:
let fruit3 = ["apple", "banana", "orange"];
let firstFruit = fruit3.shift();
console.log(fruit3); // Output: ['banana', 'orange']
console.log(firstFruit); // Output: 'apple'
// 4. unshift():
// Definition: Adds one or more elements to the beginning of an array and returns the new length of the array.
// Example:
let fruit4 = ["banana", "orange"];
let newLength1 = fruit4.unshift("apple");
console.log(fruit4); // Output: ['apple', 'banana', 'orange']
console.log(newLength1); // Output: 3

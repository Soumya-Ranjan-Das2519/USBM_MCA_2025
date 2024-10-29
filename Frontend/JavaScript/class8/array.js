//ARRAY: it is basically non-primetive datatype
//->it is defind as in : let arr=[];//square bracket
// ->array is a collection of ElementInternals
// ->contigeous(linear).
// ->under a single name(variable)
//let arr=["soumya",2,"das",45,true,false];it is correct because js is a dynamically typed language and also array in js is object. so that why js automaticaly render the type of given data so that why js accept the all type of data type.
// let arr = [];
// console.log(arr);
// console.log(typeof arr);
// let userArr = ["soumya", 21, "jajpur", true];
// console.log(userArr);
// let newArray = new Array("apple", 50, true, "orange");
// console.log(newArray);

//in order ->index & indices
//create an array and check the length
//array method:
// let srd = ["soumya", 21, "jajpur", "male"];
// console.log(srd);
// console.log(srd.length); //length

//accessing:
let cities = ["bhubaneswar", "cuttack", "jajpur", "bhadrak", "balesore"];
console.log(cities);
// console.log(cities[0]); //bhubaneswar
// console.log(cities[3]); //bhadrak

// let newCities = cities.length - 1;
// console.log(cities[newCities]); //bhadrak

//jajpur
// console.log(cities[2]);
// console.log(cities[newCities - 2]);
// console.log(cities[newCities / 2]);

//modify:
// console.log(cities);
// let modifyCity = "kendrapara";
// cities[2] = modifyCity;
// console.log(cities);

//add element:
//push():
console.log(cities);
let addCity = "jagatsinghpur";
cities.push(addCity);
console.log(cities);
//pop():
cities.pop();
console.log(cities);
//unshift():
cities.unshift("rourkela");
console.log(cities);
//shift():
cities.shift();
console.log(cities);

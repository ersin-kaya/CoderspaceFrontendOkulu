// console.log("Hello world!");

/////////////////////////////////////////////
// Variables
// var age = 10; // number
// var pi = 3.14; // number
// var name = "JavaScript"; // string
// var isActive = true;
// var firstName;
// console.log(firstName);
// console.log(typeof firstName);
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// console.log(age);
// console.log(typeof pi);
// console.log(typeof name);

// console.log(age, pi, name);

/////////////////////////////////////////////
// Implicit Type Conversion
// var firstNumber = 10;
// var secondNumber = 20;
// var result = firstNumber + secondNumber;
// var result = firstNumber - secondNumber;
// console.log(result);
// console.log(typeof result);

/////////////////////////////////////////////
// Explicit Type Conversion
// var a = "5";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var b = "b";
// console.log(b, typeof b);
// b = Number(b);
// console.log(b, typeof b);

/////////////////////////////////////////////
// Hoisting !
// console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
// console.log(`sumVar(3, 4) => ${sumVar(3, 4)}`); // sumVar is not a function because the var keyword is actually hoisted as well
// console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`); // Cannot access 'sumConst' before initialization

// const sumConst = (a, b) => a + b;
// console.log(sumVar); // undefined
// var sumVar = (a, b) => a + b;

// function sumFunc(a, b) { // before our actual code runs, javascript automatically takes this function and moves it all the way to the very top of our file
//   return a + b;
// }

// console.log(a); // Cannot access 'a' before initialization
// const a = 2;

// console.log(a); // undefined
// var a = 2;
// that's because any time you create a variable using var essentially what javascript does is at the very top of your file it creates an initialization that looks like this: var a = undefined;

/////////////////////////////////////////////
// object !
// var user = {
//   name: "Kyle",
//   age: 25,
//   isActive: true,
//   points: {
//     javascript: 100,
//     css: 95,
//   },
//   hobbies: ["coding", "gaming", "reading"],
// };

// console.log(user);
// console.log(user.name);
// console.log(user.hobbies[0]);

/////////////////////////////////////////////
// array !
// var fruits = ["peach", "banana"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[fruits.length - 1]);

/////////////////////////////////////////////
// function
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();
// console.log(sayHello);
// console.log(typeof sayHello);

/////////////////////////////////////////////
// Date
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var a = 10;
// var b = a;
// console.log(a, b);
// a = 20;
// console.log(a, b);

// var a = [10];
// var b = a;
// console.log(a, b);
// a = [20];
// console.log(a, b);
// console.log(a * b);

// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log(a, b);
// a[0] = 60;
// console.log(a, b);

/////////////////////////////////////////////
// Scope
// var a = 10;

// function test() {
//   // var b = 20;
//   b = 20;
//   console.log(a, b);
// }
// // test();
// if (true) {
//   // var c = 30;
//   // c = 30;
//   let c = 30;
// }

// {
//   // var d = 40;
//   let d = 40;
// }

// console.log(a, b, c, d);

/////////////////////////////////////////////
// Operators
// Assignment operators
// Assignment (=)
// const a = 10;

// Arithmetic operators
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 % 5);
// console.log(10 ** 5);

/////////////////////////////////////////////
// Math Object
// let result;
// result = Math.PI;
// result = Math.round(3.6);
// result = Math.round(3.51);
// result = Math.round(3.5);
// result = Math.ceil(3.2);
// result = Math.floor(3.9);
// result = Math.sqrt(16);
// result = Math.random();
// result = Math.random() * 10;
// result = Math.random() * 100;
// result = Math.floor(Math.random());
// result = Math.floor(Math.random() * 100);

// console.log(result);

/////////////////////////////////////////////
// String methods
// const string1 = "A string primitive";
// const string2 = `Also a string primitive`;
// console.log(typeof string2);

// const string3 = new String("A String object");
// console.log(typeof string3);

// let value;
// const firstName = "Varol";
// const lastName = "Maksutoğlu";
// const department = "Yazılım";
// const age = 30;

// value = firstName + " " + lastName;
// value = firstName;

// value += " " + lastName;
// console.log(typeof value); // string

// value = firstName.length;
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("a");
// value = firstName.includes("a");
// value = firstName.concat(" ", lastName, " - ", department);
// value =
//   "Name: " +
//   firstName +
//   " " +
//   "\nSurname: " +
//   lastName +
//   " " +
//   "\nAge: " +
//   age +
//   " " +
//   "\nDepartment: " +
//   department;

/////////////////////////////////////////////
// Template Literals
// value = `Name: ${firstName}
// Surname: ${lastName}
// Age: ${age}
// Department: ${department}`;

// value = `
// <ul>
//   <li>Name: ${firstName}</li>
//   <li>Surname: ${lastName}</li>
//   <li>Age: ${age}</li>
//   <li>Department: ${department}</li>
// </ul>
// `;

// console.log(value);

/////////////////////////////////////////////
// Array Methods
// const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99, 100];

// value = numbers.length;
// value = numbers[0];
// value = numbers[numbers.length - 1];
// value = numbers.indexOf(12);
// value = numbers.includes(12);
// value = numbers.push(200);
// value = numbers.push(300);
// value = numbers.unshift(200);
// value = numbers.pop();

// numbers = [];
// value = numbers.pop();

// value = numbers.shift();
// value = numbers.reverse();

// value = numbers.sort();

// value = numbers.sort(function (a, b) {
//   return a - b;
// });

// var numbersToSort = [80, 70, 30, 50, 100, 60, 20, 10, 40, 90];
// value = numbersToSort.sort((x, y) => {
//   console.log(`x: ${x}, y: ${y}`);
//   return x - y;
// });

// console.log(value);
// console.log(numbers);

// Map
// const langs = ["Python", "Java", "C++", "Javascript"];

// const result = langs.map((lang, i) => {
//   console.log(`${i + 1}. ${lang + "."}`);
//   return lang + ".";
// });

// console.log("langs:", langs);
// console.log("result:", result);

/////////////////////////////////////////////
// Object
// const student = {
//   fullName: "Varol Maksutoğlu",
//   age: 30,
//   address: {
//     city: "İstanbul",
//     country: "Türkiye",
//   },
//   langs: ["Python", "Java", "Javascript"],
//   work: () => {
//     console.log("Working...");
//     return "Working...";
//   },
// };

// value = student;
// value = student.fullName;
// value = student.address.city;
// value = student.langs[0];
// value = student.work();

// let date = new Date();
// value = date;
// value = date.getMonth() + 1;
// value = date.getDate();
// value = date.getDay();
// value = date.getFullYear();
// value = date.getHours();
// value = date.getMinutes();
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// console.log(value);

/////////////////////////////////////////////
// Comparison operators
// const a = 10;
// const b = 20;
// const c = "10";
// const d = 10;
// let value;
// value = a == c;
// value = a === c;
// value = a != b;
// value = a !== c;
// value = a > b;
// value = a < b;
// value = a >= b;
// value = a <= b;

/////////////////////////////////////////////
// Logical operators
// value = a == d && a < b;
// value = a == b || b < a;

/////////////////////////////////////////////
// Conditionals
// let a = 10;
// let b = 20;
// let value;

// if (a > b) {
//   value = `${a} is greater than ${b}`;
// } else if (a == b) {
//   value = `${a} is equal to ${b}`;
// } else {
//   value = `${a} is less than ${b}`;
// }

// const number = 5;

// switch (number) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   case 4:
//     console.log(4);
//     break;
//   default:
//     console.log("The number is not within the specified range.");
//     break;
// }

/////////////////////////////////////////////
// Loops
// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     break;
//     // continue;
//   }
//   console.log(i);
// }

// const langs = ["Python", "Java", "C++", "Javascript"];

// for (let index = 0; index < langs.length; index++) {
//   console.log(langs[index]);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   if (i == 3) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// const langs = ["Python", "Java", "C++", "Javascript"];

// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

// const result = langs.forEach((lang, i) => console.log(lang, i));

/////////////////////////////////////////////
// Functions
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();

// function sayHello() {
//   return "Hello!";
// }
// console.log(sayHello());

// function printUser(name, age) {
//   console.log(`Name: ${name} / Age: ${age}`);
// }
// printUser("Varol", 30);

// function printUser(name = "No Name", age = -1) {
//   console.log(`Name: ${name} / Age: ${age}`);
// }
// printUser("Varol");

// function square(number) {
//   return number * number;
// }
// const result = square(5) * 3;
// console.log(result);

/////////////////////////////////////////////
// Arrow Function
// const square = (x) => {
//   return x * x;
// };
// console.log(square(5));

//////////////////////////////////////////
// Object literal
// const firstPerson = {
//   name: "Varol",
//   age: 30,
//   langs: ["Java", "JavaScript", "Python"],
//   address: {
//     city: "Istanbul",
//     street: "Kadikoy",
//   },
//   showInfo: function () {
//     console.log(this.name, this.age, this.langs, this.address);
//   },
// };

// const secondPerson = {
//   name: "Mehmet",
//   age: 32,
//   langs: ["Go", "JavaScript", "Python"],
//   address: {
//     city: "Ankara",
//     street: "Cankaya",
//   },
//   showInfo: function () {
//     console.log(this.name, this.age, this.langs, this.address);
//   },
// };

// console.log(firstPerson);
// console.log(secondPerson);

// Constructor
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;

  //   this.showInfo = function () {
  //     console.log(this.name, this.age, this.langs);
  //   };
}

// !!!!!!!!!!!!!!!!!!
Person.prototype.showInfo = function () {
  console.log(this.name, this.age, this.langs);
};

const firstPerson = new Person("Varol", 30, ["Java", "JavaScript", "Python"]);
const secondPerson = new Person("Mehmet", 32, ["Go", "JavaScript", "Python"]);

// console.log(firstPerson);
// console.log(secondPerson);

// firstPerson.showInfo();
// secondPerson.showInfo();

// !!!!!!!!!!!!!!!!!!
function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const firstEmployee = new Employee("Varol", 30, ["JavaScript"], 4000);
console.log(firstEmployee);
firstEmployee.showInfo();

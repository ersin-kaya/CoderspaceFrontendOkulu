////////////////////////////////////
// Classes

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   showInfo() {
//     console.log(`Name: ${this.name} Age: ${this.age} Salary: ${this.salary}`);
//   }
// }

// const firstEmployee = new Employee("Mustafa", 25, 4000);
// console.log(firstEmployee);
// firstEmployee.showInfo();

// static
// class ClassWithStaticMethod {
//   static staticProperty = "someValue";
//   static staticMethod() {
//     return "static method has been called.";
//   }
//   static {
//     console.log("Class static initialization block called");
//   }
// }

// console.log(ClassWithStaticMethod.staticProperty);
// console.log(ClassWithStaticMethod.staticMethod());

// Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}

const firstEmployee = new Employee("Mustafa", 25, 4000);
console.log(firstEmployee);
firstEmployee.showInfo();

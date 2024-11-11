const textOutputElement = document.querySelector(".textOutput");

/////////////////// localStorage
// -
// const username = "admin";
// localStorage.setItem("username", username);
// textOutputElement.textContent = localStorage.getItem("username");

// -
// const age = 25; // number
// localStorage.setItem("age", age);

// let ageFromLocalStorage = localStorage.getItem("age");
// console.log(typeof ageFromLocalStorage); // string
// ageFromLocalStorage = +ageFromLocalStorage; // Unary plus operator
// console.log(typeof ageFromLocalStorage); // number
// textOutputElement.textContent = ageFromLocalStorage;

// -
// localStorage.clear();

// const user = {
//   name: "Varol",
//   age: 25,
//   city: "Ankara",
//   langs: ["HTML", "CSS", "JavaScript"],
// };

// localStorage.setItem("currentUser", JSON.stringify(user));

// let currentUserFromLocalStorage = localStorage.getItem("currentUser");
// console.log(typeof currentUserFromLocalStorage); // string
// currentUserFromLocalStorage = JSON.parse(currentUserFromLocalStorage);
// console.log(typeof currentUserFromLocalStorage); // object

// textOutputElement.textContent = `currentUser: ${currentUserFromLocalStorage.name}`;

// -
// localStorage.clear();

// const users = [
//   { name: "Varol", age: 25 },
//   { name: "Ahmet", age: 35 },
//   { name: "Mehmet", age: 30 },
// ];

// localStorage.setItem("users", JSON.stringify(users));

// const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));
// usersFromLocalStorage.map((user) => {
//   document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// localStorage.removeItem("users");

/////////////////// sessionStorage
// -
// const users = [
//   { name: "Varol", age: 25 },
//   { name: "Ahmet", age: 35 },
//   { name: "Mehmet", age: 30 },
// ];
// sessionStorage.setItem("users", JSON.stringify(users));

// const usersFromSessionStorage = JSON.parse(sessionStorage.getItem("users"));

// usersFromSessionStorage.map((user) => {
//   document.writeln(`<p>${user.name} - ${user.age}</p>`);
// });

// sessionStorage.removeItem("users");

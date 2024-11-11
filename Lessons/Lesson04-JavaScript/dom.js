let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.scripts[0];
value = document.links;
value = document.links[document.links.length - 1];

value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].classList;

value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerText;
value = document.getElementById("title").innerHTML;

value = document.getElementsByClassName("text");
value = document.getElementsByClassName("text")[0];
value = document.getElementsByClassName("text")[0].textContent;
value = document.getElementsByClassName("text")[0].innerText;

value = document.getElementsByTagName("p");

value = document.querySelector("#title");
value = document.querySelector(".text");
value = document.querySelector("span");

value = document.querySelectorAll(".link");
value = document.querySelectorAll("span");

const button = document.createElement("a");
button.id = "button";
button.className = "btn btn-success";
button.href = "#";
button.target = "_blank";
button.textContent = "Test button";

const container = document.getElementById("container");
container.appendChild(button);

button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Button clicked");
});

const textInput = document.querySelector("#text-input");
textInput.addEventListener("keyup", () => console.log(textInput.value));
textInput.addEventListener("focus", () => (textInput.value = ""));
textInput.addEventListener("blur", () => console.log("blur"));

console.log(value);

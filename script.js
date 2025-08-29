// 🎯 Part 1: JavaScript Basics
document.getElementById("check-age-btn").addEventListener("click", function () {
  let age = prompt("Enter your age:");
  age = parseInt(age);

  if (isNaN(age)) {
    document.getElementById("age-result").textContent = "Please enter a valid number.";
  } else if (age >= 20) {
    document.getElementById("age-result").textContent = "You're an adult!";
  } else {
    document.getElementById("age-result").textContent = "You're still a minor.";
  }
});

// ❤️ Part 2: Functions
function showGreeting(name) {
  const message = `Hello, ${name}! Welcome to your JavaScript journey.`;
  document.getElementById("greeting-output").textContent = message;
}

// Another reusable function
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum of 5 and 3 is:", calculateSum(5, 3));

// 🔁 Part 3: Loops
const items = ["HTML", "CSS", "JavaScript", "Python"];
const list = document.getElementById("loop-list");

// Using forEach loop
items.forEach(function (item) {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

// Using a for loop to simulate countdown
for (let i = 3; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}

// 🌐 Part 4: DOM Interactions
document.getElementById("toggle-btn").addEventListener("click", function () {
  const text = document.getElementById("toggle-text");
  text.classList.toggle("highlight");
});

document.getElementById("add-item-btn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New dynamic item";
  document.getElementById("dynamic-list").appendChild(newItem);
});

// Another DOM interaction: changing text content
document.getElementById("toggle-text").addEventListener("mouseover", function () {
  this.textContent = "You're hovering over me!";
});

document.getElementById("toggle-text").addEventListener("mouseout", function () {
  this.textContent = "Click the button to toggle my style!";
});
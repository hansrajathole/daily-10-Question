// Personalized message program
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let favoriteColor = prompt("Enter your favorite color:");
let city = prompt("Enter your city:");

console.log(`Hello ${name}! You are ${age} years old, your favorite color is ${favoriteColor}, and you live in ${city}.`);



//===============================================
// Convert minutes to hours and minutes
let minutes = parseInt(prompt("Enter the number of minutes:"));
let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log(`Total hours: ${hours} hours and ${remainingMinutes} minutes`);


//=================================================
// Assign letter grade based on score
let score = parseInt(prompt("Enter the score:"));
let grade;

if (score >= 90 && score <= 100) grade = "A";
else if (score >= 75 && score < 90) grade = "B";
else if (score >= 60 && score < 75) grade = "C";
else if (score >= 50 && score < 60) grade = "D";
else if (score >= 35 && score < 50) grade = "E";
else grade = "Fail";

console.log(`Grade: ${grade}`);



//=================================================
// Simple Calculator
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter an operation (+, -, *, /, %):");
let result;

switch (operation) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = b !== 0 ? a / b : "Error: Division by zero!";
    break;
  case "%":
    result = a % b;
    break;
  default:
    result = "Invalid operation!";
}

console.log(`Result: ${result}`);



//===================================================
// FizzBuzz Program
let n = parseInt(prompt("Enter a value of n:"));
let answer;

if (n % 3 === 0 && n % 5 === 0) answer = "FizzBuzz";
else if (n % 3 === 0) answer = "Fizz";
else if (n % 5 === 0) answer = "Buzz";
else answer = String(n);

console.log(answer);

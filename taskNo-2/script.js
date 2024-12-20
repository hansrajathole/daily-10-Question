//===============================================
// Program to find GCD/HCF
function findGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  let a = parseInt(prompt("Enter value of a:"));
  let b = parseInt(prompt("Enter value of b:"));
  
  console.log(`GCD of ${a} and ${b} = ${findGCD(a, b)}`);

  

  //===================================================
  // Program to find LCM
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
  }
  
  function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
  }
  
  let a = parseInt(prompt("Enter value of a:"));
  let b = parseInt(prompt("Enter value of b:"));
  
  console.log(`LCM of ${a} and ${b} = ${findLCM(a, b)}`);

  


  
//==============================================================
// Fibonacci series
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  }
  
  let n = parseInt(prompt("Enter a value of n:"));
  
  console.log(`First ${n} terms of Fibonacci series: ${generateFibonacci(n).join(" ")}`);

  
  //========================================================
  // Hailstone sequence
function hailstoneSequence(n) {
    let sequence = [];
    while (n !== 1) {
      sequence.push(n);
      if (n % 2 === 0) n = n / 2;
      else n = 3 * n + 1;
    }
    sequence.push(1); // End the sequence with 1
    return sequence;
  }
  
  let n = parseInt(prompt("Enter a value of n:"));
  
  console.log(`Hailstone sequence: ${hailstoneSequence(n).join(" ")}`);

  


//========================================================
// Menu-Based Program
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    return fact;
  }
  
  let choice;
  
  do {
    console.log("Menu:");
    console.log("1. Check if a number is even or odd");
    console.log("2. Check if a number is prime");
    console.log("3. Calculate the factorial of a number");
    console.log("4. Exit the program");
  
    choice = parseInt(prompt("Enter your choice:"));
  
    switch (choice) {
      case 1:
        let num1 = parseInt(prompt("Enter a number:"));
        console.log(`${num1} is ${isEvenOrOdd(num1)}.`);
        break;
  
      case 2:
        let num2 = parseInt(prompt("Enter a number:"));
        console.log(
          `${num2} is ${isPrime(num2) ? "a prime number" : "not a prime number"}.`
        );
        break;
  
      case 3:
        let num3 = parseInt(prompt("Enter a number:"));
        console.log(`Factorial of ${num3} is ${factorial(num3)}.`);
        break;
  
      case 4:
        console.log("Exiting the program. Goodbye!");
        break;
  
      default:
        console.log("Invalid choice! Please try again.");
    }
  } while (choice !== 4);
  
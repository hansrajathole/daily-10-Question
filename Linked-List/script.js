class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  
const person1 = new Person("Hansraj", 24);
const person2 = new Person("Athole", 22);

person1.greet(); 
person2.greet(); 


// console.log(person1);
// console.log(person2);
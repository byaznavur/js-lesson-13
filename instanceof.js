class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let p1 = new Person("Abdulaziz", "Toshpulatov");

// console.log(p1 instanceof Person);
// console.log(123 instanceof Person);

// console.log(p1 instanceof String);

// let str1 = "Abdulaziz"; // primitive

// console.log(str1 instanceof String);

// let str2 = new String("Abdulaziz"); // instance

// console.log(str2 instanceof String);

// console.log(123 instanceof Number);

// console.log(new Number(123) instanceof Number);

console.log(String instanceof Object);
console.log(Number instanceof Object);

console.log(Person instanceof Object);

console.log(p1 instanceof Object);

console.log(Object instanceof Object);
console.log(Function instanceof String);

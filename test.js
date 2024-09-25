// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// let res = new Person("Abdulaziz", "Abduhakimov");
// console.log(res);
// console.log(Person.prototype);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

let res = new Person("Abdulaziz", "Abduhakimov");
console.log(res.firstName);
console.log(res.lastName);
console.log(res.fullName());

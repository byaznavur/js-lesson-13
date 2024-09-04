const Person = class {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

let p1 = new Person("Abdulaziz", "Programmer");

console.log(p1);

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName());

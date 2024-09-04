function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  if (!new.target) {
    return new Person(firstName, lastName);
  }
}

Person.prototype.fullName = function () {
  hello = "Hello";
  console.log(hello);
  return this.firstName + " " + this.lastName;
};

// let p1 = new Person("Abdulaziz", "Programmer");
let p1 = Person("Abdulaziz", "Programmer");

console.log(p1);
// console.log(Person.prototype);

// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName());

// for (let key in p1) {
//   console.log(key);
// }

// console.log(p1.propertyIsEnumerable("fullName"));

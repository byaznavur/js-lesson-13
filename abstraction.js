class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  getFirstName() {
    return this.#firstName;
  }
  setFirstName(value) {
    this.#firstName = value;
  }
  getLastName() {
    return this.#lastName;
  }
  setLastName(value) {
    this.#lastName = value;
  }
}

class Student extends Person {
  #university;
  #course;
  constructor(firstName, lastName, university, course) {
    super(firstName, lastName);
    this.#university = university;
    this.#course = course;
  }
  #getFullName() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }
  getInfo() {
    return `${this.#getFullName()} ${this.#university}da ${
      this.#course
    }-kursda o'qiydi.`;
  }
}

let p1 = new Person("Abdulaziz", "Programmer");

// console.log(p1.#firstName);
// console.log(p1.#lastName);

// p1.setFirstName("Elbek");
// p1.setLastName("Melibaev");

// console.log(p1.getFirstName());
// console.log(p1.getLastName());

let s1 = new Student("Azamat", "Abrayev", "Westminster", 2);

console.log(s1);
console.log(s1.getInfo());

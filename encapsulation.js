class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
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
  // getInfo() {
  //   return `${this.#firstName} ${this.#lastName} ${this.#university}da ${
  //     this.#course
  //   }-kursda o'qiydi.`;
  // }
}

let p1 = new Person("Abdulaziz", "Programmer");

let s1 = new Student("Azamat", "Abrayev", "Westminster", 2);

// console.log(p1.#firstName);
// console.log(p1.#lastName);

// console.log(s1);

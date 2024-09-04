class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, work, salary) {
    super(firstName, lastName);
    this.work = work;
    this.salary = salary;
  }
}

let emp1 = new Employee("Azamat", "Abrayev", "Front-end Developer", 500);

console.log(emp1);

console.log(emp1.fullName());

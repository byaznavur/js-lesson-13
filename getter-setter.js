class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get getFullName() {
    return this.firstName + " " + this.lastName;
  }
  set getFullName(value) {
    // let arr = value.split(" ");
    // this.firstName = arr[0];
    // this.lastName = arr[1];
    [this.firstName, this.lastName] = value.split(" ");
  }
}

let p1 = new Person("Abdulaziz", "Toshpulatov");

p1.getFullName = "Shahobiddin Xalilov";

console.log(p1.getFullName);
console.log(p1.firstName);
console.log(p1.lastName);

// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

//! Class1

// class Rectangle {
//   #width;
//   #height;
//   constructor(width, height) {
//     this.#width = width;
//     this.#height = height;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   getHeight() {
//     return this.#height;
//   }
//   setSides(a, b) {
//     this.#width = a;
//     this.#height = b;
//   }
//   get perimetr() {
//     return 2 * (this.#width + this.#height);
//   }
//   get area() {
//     return this.#width * this.#height;
//   }
// }

// let r1 = new Rectangle(10, 20);

// r1.setSides(30, 40);

// console.log(r1.getWidth());
// console.log(r1.getHeight());

// console.log(r1.perimetr);
// console.log(r1.area);

//! 1. Rectangle nomli class yarating:

// Private properties:

// width
// height

// Methods:

// getWidth()
// getHeight()
// setSides(a, b)
// perimeter() - getter
// area() - getter

// Class

//!class1
// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;
//   constructor(leftSide, rightSide, width) {
//     this.#leftSide = leftSide;
//     this.#rightSide = rightSide;
//     this.#width = width;
//   }

//   getLeftSide() {
//     return this.#leftSide;
//   }
//   getRightSide() {
//     return this.#rightSide;
//   }
//   getWith() {
//     return this.#width;
//   }
//   setSides(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }
// }

// let res = new Triangle(12, 13, 14);
// res.setSides(10, 20, 30);
// console.log(res.getLeftSide());
// console.log(res.getRightSide());
// console.log(res.getWith());

// !Class2

// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;
//   constructor(id, firstName, lastName, salary) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#salary = salary;
//   }

//   getId() {
//     return this.#id;
//   }

//   getFirstName() {
//     return this.#firstName;
//   }

//   getLastName() {
//     return this.#lastName;
//   }
//   getSalary() {
//     return this.#salary;
//   }

//   setAll(id, fName, lName, s) {
//     this.#id = id;
//     this.#firstName = fName;
//     this.#lastName = lName;
//     this.#salary = s;
//   }

//   getFullName() {
//     return this.#firstName + " " + this.#lastName;
//   }
//   getAnnualSalary() {
//     return this.#salary * 12;
//   }

//   raiseSalary(percent) {
//     return (this.#salary += (this.#salary * percent) / 100);
//   }
// }

// let emp1 = new Employee(1, "John", "Doe", 5000);
// emp1.setAll(2, "Adam", "Doe", 6000);
// console.log(emp1.getId());
// console.log(emp1.getFirstName());
// console.log(emp1.getLastName());
// console.log(emp1.getSalary());
// console.log(emp1.getFullName());
// console.log(emp1.getAnnualSalary());
// console.log(emp1.raiseSalary(10));

// !CustumDate

// class CustumDate {
//   #day;
//   #month;
//   #year;
//   constructor(day, month, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }

//   get day() {
//     return this.#day;
//   }
//   get month() {
//     return this.#month;
//   }
//   get year() {
//     return this.#year;
//   }

//   allDateSet(a, b, c) {
//     this.#day = a;
//     this.#month = b;
//     this.#year = c;
//   }

//   getISOdate(a, b, c) {
//     this.#day = a;
//     this.#month = b;
//     this.#year = c;
//     return `${this.#day >= 10 ? this.#day : "0" + this.#day}-${
//       this.#month >= 10 ? this.#month : "0" + this.#month
//     }-${this.#year}`;
//   }
// }

// let dateRes = new CustumDate(25, 9, 2024);
// // dateRes.allDateSet(26, 9, 2024);
// console.log(dateRes.day);
// console.log(dateRes.month);
// console.log(dateRes.year);
// console.log(dateRes.getISOdate(2, 9, 2024));

// ! Class

// class Time {
//   #hour;
//   #minute;
//   #second;
//   constructor(hour, minute, second) {
//     this.#hour = hour;
//     this.#minute = minute;
//     this.#second = second;
//   }

//   getHour() {
//     return this.#hour;
//   }
//   getMinute() {
//     return this.#minute;
//   }
//   getSecond() {
//     return this.#second;
//   }
//   setTime(h, m, s) {
//     this.#hour = h;
//     this.#minute = m;
//     this.#second = s;
//   }

//   nextSecond() {
//     if (this.#second === 59) {
//       this.#second = 0;
//       if (this.#minute === 59) {
//         this.#minute = 0;
//         if (this.#hour === 23) {
//           this.#hour = 0;
//         } else {
//           this.#hour++;
//         }
//       } else {
//         this.#minute++;
//       }
//     } else {
//       this.#second++;
//     }
//     return `${this.#hour < 10 ? "0" + this.#hour : this.#hour}:${
//       this.#minute < 10 ? "0" + this.#minute : this.#minute
//     }:${this.#second < 10 ? "0" + this.#second : this.#second}`;
//   }

//   previousSecond() {
//     if (this.#second === 0) {
//       this.#second = 59;
//       if (this.#minute === 0) {
//         this.#minute = 59;
//         if (this.#hour === 0) {
//           this.#hour = 23;
//         } else {
//           this.#hour--;
//         }
//       } else {
//         this.#minute--;
//       }
//     } else {
//       this.#second--;
//     }
//     return `${this.#hour < 10 ? "0" + this.#hour : this.#hour}:${
//       this.#minute < 10 ? "0" + this.#minute : this.#minute
//     }:${this.#second < 10 ? "0" + this.#second : this.#second}`;
//   }
// }

// let timeRes = new Time(4, 45, 0);

// console.log(timeRes.nextSecond());
// console.log(timeRes.previousSecond());

// class Shape {
//   #color;
//   #filled;
//   constructor(color, filled) {
//     this.#color = color;
//     this.#filled = filled;
//   }

//   getColor() {
//     return this.#color;
//   }
//   setColor(color) {
//     this.#color = color;
//   }
//   isFilled() {
//     return this.#filled;
//   }
//   setFilled(fill) {
//     this.#filled = fill;
//   }
// }

// let resSheap = new Shape("red", true);
// resSheap.setColor("green");
// resSheap.setFilled(false);
// console.log(resSheap.getColor());
// console.log(resSheap.isFilled());

// ! Circle

// class Circle extends Shape {
//   #radius;
//   constructor(radius, color, isFilled) {
//     super(color, isFilled);
//     this.#radius = radius;
//   }

//   getRadius() {
//     return this.#radius;
//   }
//   setRadius(radius) {
//     this.#radius = radius;
//   }
//   getArea() {
//     return Math.PI * Math.pow(this.#radius, 2);
//   }
//   getPerimeter() {
//     return 2 * Math.PI * this.#radius;
//   }
// }

// let resCircle = new Circle(12);

// console.log(resCircle.getRadius());

// class Rectangle extends Shape {
//   #width;
//   #height;
//   constructor(width, height, color, isFilled) {
//     super(color, isFilled);
//     this.#width = width;
//     this.#height = height;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setWidth(width) {
//     this.#width = width;
//   }
//   getHeight() {
//     return this.#height;
//   }
//   setHeight(height) {
//     this.#height = height;
//   }
//   getArea() {
//     return this.#width * this.#height;
//   }

//   getPerimeter() {
//     return 2 * (this.#width + this.#height);
//   }
// }
// !6. Person

// class Person {
//   #name;
//   #address;
//   constructor(name, address) {
//     this.#name = name;
//     this.#address = address;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(a) {
//     this.#name = a;
//     return this.#name;
//   }

//   getAddress() {
//     return this.#address;
//   }

//   setAddress(address) {
//     this.#address = address;
//     return this.#address;
//   }
// }

// let res = new Person("Azizbek", "Tashkent");
// res.setName("Abdulaziz");
// console.log(res.getName());

// class Student extends Person {
//   #faculty;
//   #year;
//   #university;
//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }

//   getInfo() {
//     return `Name: ${this.getName()}, Faculty: ${this.#faculty}, Year: ${
//       this.#year
//     }, University: ${this.#university}`;
//   }

//   setInfo(faculty, year, university) {
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }

//   getFaculty() {
//     return this.#faculty;
//   }

//   getYear() {
//     return this.#year;
//   }

//   getUniversity() {
//     return this.#university;
//   }

//   setFaculty(faculty) {
//     this.#faculty = faculty;
//   }

//   setYear(year) {
//     this.#year = year;
//   }

//   setUniversity(university) {
//     this.#university = university;
//   }
// }

// let resStudent = new Student("Azizbek", "Tashkent", "Energetika", 2024, "TSTU");
// console.log(resStudent.getInfo());

// class Employee extends Person {
//   #salary;
//   #work;
//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.#salary = salary;
//     this.#work = work;
//   }

//   getSalary() {
//     return this.#salary;
//   }

//   setSalary(salary) {
//     this.#salary = salary;
//   }

//   getWork() {
//     return this.#work;
//   }

//   setWork(work) {
//     this.#work = work;
//   }
// }

// let resEmployee = new Employee("Abdulaziz", "Tashkent", 1200, "Developer");
// console.log(resEmployee.getWork());

//! 7.  Animal - superclass, others - subclasses

// Superclass: Animal
// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }

//   getInfo() {
//     return `Name: ${this.name}, Speed: ${this.speed}, Weight: ${this.weight}`;
//   }
// }

// // Subclass: Mammal
// class Mammal extends Animal {
//   #legs;

//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.#legs = legs;
//   }

//   getLegs() {
//     return this.#legs;
//   }

//   setLegs(legs) {
//     this.#legs = legs;
//   }
// }

// // Subclass: Cat
// class Cat extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }

//   getSound() {
//     return "Meow";
//   }
// }

// // Subclass: Dog
// class Dog extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }

//   getSound() {
//     return "Woof";
//   }
// }

// // Subclass: Fish
// class Fish extends Animal {
//   #size;

//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.#size = size;
//   }

//   getSize() {
//     return this.#size;
//   }

//   setSize(size) {
//     this.#size = size;
//   }
// }

// // Subclass: Whale
// class Whale extends Fish {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }

//   getSound() {
//     return "Poof";
//   }
// }

// // Subclass: Shark
// class Shark extends Fish {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }

//   getSound() {
//     return "Sheef";
//   }
// }

// // Examples:

// // Cat instance
// let cat = new Cat("Kitty", 30, 5, 4);
// console.log(cat.getInfo()); // Name: Kitty, Speed: 30, Weight: 5
// console.log(cat.getSound()); // Meow

// // Dog instance
// let dog = new Dog("Buddy", 40, 20, 4);
// console.log(dog.getInfo()); // Name: Buddy, Speed: 40, Weight: 20
// console.log(dog.getSound()); // Woof

// // Whale instance
// let whale = new Whale("Big Whale", 10, 30000, 30);
// console.log(whale.getInfo()); // Name: Big Whale, Speed: 10, Weight: 30000
// console.log(whale.getSound()); // Poof

// // Shark instance
// let shark = new Shark("Great Shark", 50, 1000, 20);
// console.log(shark.getInfo()); // Name: Great Shark, Speed: 50, Weight: 1000
// console.log(shark.getSound()); // Sheef

// ! 8 Static keyword

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Object.customKeys = function (obj) {
//   let res = [];
//   for (key in obj) {
//     res.push(key);
//   }
//   return res;
// };

// console.log(Object.customKeys(obj));

// Object.customValues = function (obj) {
//   let res = [];
//   for (let key in obj) {
//     res.push(obj[key]);
//   }
//   return res;
// };

// console.log(Object.customValues(obj));
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// Object.customEntries = function (obj) {
//   let res = [];
//   for (let key in obj) {
//     res.push([key, obj[key]]);
//   }
//   return res;
// };

// console.log(Object.customEntries(obj));

// let num = 123;

// Number.customIsInteger = function (num) {
//   let splitNum = num.toString().split(".");
//   return +splitNum[1] === undefined ? false : true;
// };

// console.log(Number.customIsInteger(num));
// let arr = { a: 32, b: 123 };
// Array.customIsArray = function (arr) {
//   return typeof arr === "object" && arr instanceof Array ? true : false;
// };

// console.log(Array.customIsArray(arr));

// Array.isNumberArray = function (arr) {
//   return arr.every((item) => typeof item === "number");
// };

// console.log(Array.isNumberArray(arr));
// let arr = [1, 2, 3, 4, 123, 43, 341234, 52342];
// Array.max = function (arr) {
//   let maxNum = arr[0];

//   for (let el of arr) {
//     if (el > maxNum) {
//       maxNum = el;
//     }
//   }
//   return maxNum;
// };

// console.log(Array.max(arr));

// let arr1 = [1, 2, 3, 4, 123, 43, 341234, 52342];
// Array.min = function (arr1) {
//   let minNum = arr1[0];

//   for (let el of arr1) {
//     if (el < minNum) {
//       minNum = el;
//     }
//   }
//   return minNum;
// };

// console.log(Array.min(arr1));

class Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
    this.housePrice = housePrice;
    this.housesNumber = housesNumber;
    this.carPrice = carPrice;
    this.carsNumber = carsNumber;
    this.bankAccount = bankAccount;
  }

  getWealth() {
    return (
      this.housePrice * this.housesNumber +
      this.carsNumber * this.carPrice +
      this.bankAccount
    );
  }
}

let res = new Person(100000, 3, 50000, 7, 300000);
console.log(res.getWealth());

class RichPerson extends Person {
  constructor(
    housePrice,
    housesNumber,
    carPrice,
    carsNumber,
    bankAccount,
    companyPrice,
    companiesNumber,
    investigation
  ) {
    super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
    this.companyPrice = companyPrice;
    this.companiesNumber = companiesNumber;
    this.investigation = investigation;
  }

  getWealth() {
    return (
      super.getWealth() +
      this.companyPrice * this.companiesNumber +
      this.investigation +
      "$"
    );
  }
}

let richRes = new RichPerson(12, 12, 12, 31, 2, 12, 3, 312);

console.log(richRes.getWealth());

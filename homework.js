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

// // ! Circle

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

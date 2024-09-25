// Class1

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

//! Class2

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(Object.keys(obj));

// Object.customKeys = function (obj) {
//   let res = [];
//   for (key in obj) {
//     res.push(key);
//   }
//   return res;
// };

// console.log(Object.customKeys(obj));

// Class3

Array.sum = function () {
  let sum = 0;
  for (el of arguments) {
    sum += el;
  }
  return sum;
};

console.log(Array.sum(4, 5, 6, 8));

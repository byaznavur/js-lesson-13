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
class Triangle {
  #leftSide;
  #rightSide;
  #width;
  constructor(leftSide, rightSide, width) {
    this.#leftSide = leftSide;
    this.#rightSide = rightSide;
    this.#width = width;
  }

  getLeftSide() {
    return this.#leftSide;
  }
  getRightSide() {
    return this.#rightSide;
  }
  getWith() {
    return this.#width;
  }
  setSides(a, b, c) {
    this.#leftSide = a;
    this.#rightSide = b;
    this.#width = c;
  }
}

let res = new Triangle(12, 13, 14);
res.setSides(10, 20, 30);
console.log(res.getLeftSide());
console.log(res.getRightSide());
console.log(res.getWith());

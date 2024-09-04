class Product {
  static count = 0;
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    Product.count++;
  }
  static getCount() {
    return Product.count;
  }
}

let p1 = new Product("Iphone", 1200, 20);
let p2 = new Product("Samsung", 800, 10);

// console.log(p1);

// console.log(p1.name);

// console.log(p1.count);

console.log(Product.count);

console.log(Product.getCount());

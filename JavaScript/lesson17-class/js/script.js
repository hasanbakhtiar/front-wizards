// function Car(title, price, color) {
//   this.ititle = title;
//   this.icolor = color;
//   this.iprice = price;
//
//   this.icalc = function calculateSpeed(km, h) {
//     return `${this.ititle}: ${km / h}`;
//   };
// }
//
// const myCar = new Car('BMW', 30000, 'red');
//
// console.log(myCar.icalc(300, 2));

class Car {
  constructor(title, price, color) {
    this.ititle = title;
    this.icolor = color;
    this.iprice = price;
  }
  calculateSpeed(km, h) {
    return `${this.ititle} speed is ${km / h}km/h`;
  }
}

const myCar = new Car('Mercedes', 20000, 'blue');
console.log(myCar.calculateSpeed(2000, 4));

class Moto extends Car {
  constructor(title, price, color) {
    super(title, price, color);
  }
}

const myMoto = new Moto('Yamaha', 10000, 'black');
console.log(myMoto.calculateSpeed(1000, 7));

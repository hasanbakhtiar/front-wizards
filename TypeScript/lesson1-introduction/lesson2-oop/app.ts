class Car {
  protected infoBrand: string;
  private infoYear: number;
  public infoStatus: boolean;

  constructor(brand: string, year: number, status: boolean) {
    this.infoBrand = brand;
    this.infoYear = year;
    this.infoStatus = status;
  }

  public calcluate(km: number, hour: number): void {
    console.log(`${this.infoBrand}:speed is ${km / hour}km/h`);
  }
}

const myCar = new Car("BMW", 2020, false);
console.log(myCar.infoStatus);

class Moto extends Car {
  constructor(brand: string, year: number, status: boolean) {
    super(brand, year, status);
  }
  public test(): void {
    console.log(this.infoStatus);
  }
}

const myMoto = new Moto("Yamaha", 2025, true);
// console.log(myMoto.infoBrand);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, year, status) {
        this.infoBrand = brand;
        this.infoYear = year;
        this.infoStatus = status;
    }
    Car.prototype.calcluate = function (km, hour) {
        console.log("".concat(this.infoBrand, ":speed is ").concat(km / hour, "km/h"));
    };
    return Car;
}());
var myCar = new Car("BMW", 2020, false);
console.log(myCar.infoStatus);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, year, status) {
        return _super.call(this, brand, year, status) || this;
    }
    Moto.prototype.test = function () {
        console.log(this.infoStatus);
    };
    return Moto;
}(Car));
var myMoto = new Moto("Yamaha", 2025, true);
// console.log(myMoto.infoBrand);

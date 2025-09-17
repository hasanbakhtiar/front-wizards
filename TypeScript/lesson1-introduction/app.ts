// const info: number = 5;
// console.log(info);

// const infoTwo: string = "Hello";
// console.log(infoTwo);

// const infoThree: boolean = true;
// console.log(infoThree);

// const infoArr: Array<number | string> = [10, 5, "Hello", 5];
// console.log(infoArr);

// type infoType = {
//   title: string;
//   price: number;
//   status: boolean;
//   color: string[];
// };
// const infoObj: infoType = {
//   title: "Asus zenbook",
//   price: 3000,
//   status: true,
//   color: ["white", "black", "red"],
// };
//
// console.log(infoObj);

// type infoType = {
//   title: string;
//   price: number;
//   status: boolean;
//   color: string[];
//   calculate: Function;
// };
//
// const products: infoType[] = [
//   {
//     title: "Asus zenbook",
//     price: 3000,
//     status: true,
//     color: ["white", "black", "red"],
//     calculate: (a: number, b: number) => {
//       console.log(this.price - a * b);
//     },
//   },
//   {
//     title: "Asus zenbook",
//     price: 3000,
//     status: true,
//     color: ["white", "black", "red"],
//     calculate: () => {
//       console.log(this.price);
//     },
//   },
// ];
//
// console.log(window);

function calculate(km: number, hour: number) {
  return km / hour;
}

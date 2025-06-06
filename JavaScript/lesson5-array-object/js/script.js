// const infoArr = ['table','pen','book'];
// infoArr[115] = "new value";
// infoArr[15] = "new value";
// console.log(infoArr);

// const infoArr = [];
//
// infoArr[0] = "table";
// infoArr[1] = "pen";
// infoArr[2] = "book";

// const infoArr = ['table','pen','book'];
// infoArr["mydata"] = "tv";
//
//
// console.log(infoArr['mydata']);

// const fruits = ['Apple', 'Banana', 'Orange',
// 'Grape', 'Pear'];
//
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(info.length);
// console.log(info[0]);
// console.log(info[1]);
// console.log(info[2]);

// const infoArr = ['table','pen',['bmw','mercedes',[1,2,3,[true,['rain','sun'],false],4,5],'rr'],'book','mouse'];
// console.log(infoArr[2][2][3][1][0])

//#####################################Object#######################################

// const personalInfo = {
//   name:"Hasan",
//   surname:"Bakhtiar",
//   phone:"+994 70 247 97 27",
//   address:"Azerbaijan, Baku"
// };
//
//
// console.log(personalInfo.name + " " + personalInfo.surname);

const products = [
  {
    title: 'Mi 15 ultra',
    color: ['black', 'white', 'orange'],
    newDevice: true,
    price: 3000,
    stock: 10,
  },
  {
    title: 'Samsung S25 ultra',
    color: 'silver',
    newDevice: true,
    price: 3200,
    stock: 12,
  },
  {
    title: 'Oppo Find X6 Pro',
    color: 'blue',
    newDevice: false,
    price: 1300,
    stock: 1,
  },
  {
    title: 'Motorolla',
    color: 'white',
    newDevice: true,
    price: 350,
    stock: 100,
  },
];



// const infoArr = ['table','pen','book'];
//
// for(let item of infoArr){
//   console.log(item)
// }


// for (let i of products){
  // console.log(i)
    // if (i.price < 1500 && i.newDevice) {
    //     console.log(i.title);
    //   }
// }

// for (let i in products) {
//   if (products[i].price < 1500 && products[i].newDevice) {
//     console.log(products[i].title);
//   }
// }

// for (let index = 0; index < products.length; index++) {
//   if (products[index].price<1500 && products[index].newDevice) {
//     console.log(products[index].title);
//   }
// }

// console.log(products[0].color);






// for(let i=0;i<10;i++){
//   if (i==5) {
//     break;
//   }
//   console.log(i);
// }



for(let i=0;i<10;i++){
    if (i==5) {
          continue;
        }
    console.log(i);
}

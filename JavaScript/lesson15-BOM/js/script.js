const btn = document.querySelector('button');
const linkurl = window.location.pathname;
const text = document.querySelector('p');

const fetchdata = async ()=>{
    const fetchApi = await fetch("https://fakestoreapi.com/products")
    const myData = await fetchApi.json();    
    console.log(myData)
}

fetchdata();





// const myTimeStart = setInterval(() => {
//   text.innerText = new Date().getSeconds();
// }, 1000);
//
// btn.onclick = () => {
//   clearInterval(myTimeStart);
// };

// setTimeout(() => {
//  document.write("Hello");
// }, 3000);

// setInterval(() => {
// document.write("hello")
// }, 1000);

// btn.onclick = () => {

// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);
// window.history.back();
// window.history.forward();

//   if (linkurl==="/") {
//     console.log("Home page");
//
//   }else if(linkurl==='/about'){
//     console.log('about page');
//
//   }else{
// console.log('not found page');
//
//   }
// };

// window.location.assign('https://webluna.org');

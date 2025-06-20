
const btn = document.querySelector('button');
const menu = document.querySelector('menu');


btn.onclick = ()=>{
  if (menu.className==="open") {
    menu.className="close";
    btn.innerText =">";
  } else {
    menu.className="open";
        btn.innerText ="X";

  }
}

















// const textElem = document.querySelector('p');
// const btn = document.querySelector('button');
// const img = document.querySelector('img');
//
// const infoAction = () => {
//   textElem.classList.toggle("myblack");
//   // textElem.className = "mygreen";
//   img.attributes[0].value =
//     'https://rare-gallery.com/mocahbig/1341667-MarioSuper-Mario-Bros.-HD-Wallpaper.jpg';
//   // textElem.innerHTML = 'new value';
//   // textElem.style.color = 'red';
//   // textElem.style.backgroundColor = 'green';
//   // textElem.style.fontSize = '20px';
// };
// btn.onclick = infoAction;

// const infoActionOld = ()=>{
//     textElem.innerHTML = "old value";
//
// }

// btn.addEventListener("mouseover",infoAction);
// btn.addEventListener("mouseout",infoActionOld);

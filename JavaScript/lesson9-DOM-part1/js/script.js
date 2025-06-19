// const h1Elem = document.getElementsByTagName('h1');
// const changeData = () => {
//   for(let i=0; i< h1Elem.length;i++){
//     h1Elem[i].innerHTML = 'new data';
//
//   }
// };
// changeData();

// document.getElementById('test').innerHTML = "<i>testing</i>";
// document.getElementsByClassName('mytext')[0].innerHTML = "<i>testing</i>";

// document.querySelector('h1').innerHTML = "new value";

// document.querySelectorAll('h1')[1].innerHTML = "new value";

const elemName = document.querySelector('.name');
const btn = document.querySelector('button');

const showSurname = () => {
  if (elemName.innerHTML === 'Ofelya') {
    elemName.innerHTML = 'Alkishsiyeva';
    btn.innerHTML = 'name';
  } else {
    elemName.innerHTML = 'Ofelya';
    btn.innerHTML = 'surname';
  }
};

btn.addEventListener('click', showSurname);

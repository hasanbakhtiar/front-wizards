const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const todoApp = (e) => {
  e.preventDefault();
  if (!input.value.trim()) {
    Swal.fire({
      title: 'Please, fill all inputs!',
      icon: 'warning',
    });
  } else {
    const li = document.createElement('li');
    // li yaratdim
    li.innerHTML = input.value;
    // li deyerini inputun valusuna beraber etdim
    li.setAttribute('class', 'list-group-item');
    // liye bootstrapin classini verdim dizayn ucun
    input.value = '';
    //formu submit edensen sonra inputun icind deyer qalmamasi ucun
    ul.append(li);
    //yaratdigimiz li-ni ul-nin icine elave etdim
    li.onclick = () => {
      li.style.textDecoration = 'line-through';
    };
    li.ondblclick = () => {
      li.remove();
    };
  }
};

form.onsubmit = todoApp;

// const h1 = document.createElement('h1');
// const text = document.createTextNode("Hello World");
// h1.appendChild(text);
// document.body.appendChild(h1);
// h1.setAttribute("class","text-center text-danger bg-dark");

// const list = document.querySelector('ul');
// const result =
//   list.firstChild.firstChild.parentNode.parentNode.lastChild.firstChild
//     .parentNode.previousSibling.firstChild.parentNode.nextSibling.firstChild
//     .nodeValue;
// console.log(result);

// const form = document.querySelector('form');
// const emailInput = document.querySelectorAll('input')[0];
// const passInput = document.querySelectorAll('input')[1];
//
// const user = {
//     email:"hasan@webluna.org",
//     password:"hasan122"
// }
//
//
//
// const formSubmited = (e) => {
//   e.preventDefault();
//   if (!emailInput.value || !passInput.value) {
//     Swal.fire({
//       title: 'Please, fill all inputs!',
//       icon: 'warning',
//     });
//   } else {
//     if (user.email === emailInput.value && user.password === passInput.value) {
//       Swal.fire({
//         title: 'Login is successfull!',
//         icon: 'success',
//       });
//     } else {
//       Swal.fire({
//         title: 'Email or password is wrong!',
//         icon: 'error',
//       });
//     }
//   }
// };
//
// form.onsubmit = formSubmited;

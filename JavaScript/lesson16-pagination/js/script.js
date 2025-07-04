const ul = document.querySelector('ul');

const fetchApi = (start = 0, end = 4) => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
      let li = '';
      data.slice(start, end).map((item) => (li += `<li>${item.title}</li>`));
      ul.innerHTML = li;
    });
};
const btn = document.querySelectorAll('button');
btn[0].onclick=()=>{fetchApi(0,4)}
btn[1].onclick=()=>{fetchApi(4,8)}
btn[2].onclick=()=>{fetchApi(8,12)}
btn[3].onclick=()=>{fetchApi(12,16)}
btn[4].onclick=()=>{fetchApi(16,20)}
fetchApi();

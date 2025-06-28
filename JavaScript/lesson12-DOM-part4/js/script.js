import { products, category } from "./data.js";

const categoryList = document.querySelector(".list-group");
const productsCon = document.querySelector("#products-con");

const showCategory = () => {
  let li = "";
  category.map((item) => (li += `<li class="list-group-item">${item.name}</li>`));
  categoryList.innerHTML = li;
}


const showProducts = (cat) => {
  if (cat) {
    let card = "";
    const filteredData = products.filter(p => p.category === cat);
    filteredData.map((item) => (card += `  
  <div class="col-12 col-sm-6 col-md-4" data-aos="zoom-in">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">
                  $${item.price}
                </p>
                <p class="text-secondary">${item.category}</p>
                <a href="#" class="btn btn-dark">Read more</a>
              </div>
            </div>
          </div>
          `));

    productsCon.innerHTML = card;
  } else {
    let card = "";
    products.map((item) => (card += `  
  <div class="col-12 col-sm-6 col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">
                  $${item.price}
                </p>
                <p class="text-secondary">${item.category}</p>
                <a href="#" class="btn btn-dark">Read more</a>
              </div>
            </div>
          </div>
          `));

    productsCon.innerHTML = card;
  }

}
showCategory();
showProducts();

const categoryItem = document.querySelectorAll('.list-group-item');
for (let index = 0; index < category.length; index++) {
  categoryItem[index].onclick = () => {
    showProducts(category[index].name);
  }
}



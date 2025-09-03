import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import configureStore from './tool/store/configureStore';
import { createProduct } from './tool/actions/productAction';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const fetchData = () => {
  fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => (
    data.map(item => (
      store.dispatch(
        createProduct({
          image: item.image,
          title: item.title,
          price: item.price,
          descrition: item.descrition,
        })
      )
    ))
  ))
}
fetchData()





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}><AppRouter /></Provider>
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import configureStore from './tool/store/configureStore';
import { createProduct } from './tool/actions/productAction';
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  createProduct({
    image:
      'https://dlcdnwebimgs.asus.com/files/media/53e83f83-ba9d-4c06-8a0e-11b55c813290/v1/features/images/large/1x/s1/main.jpg',
    title: 'Asus Zenbook S14',
    price: 2300,
    descrition: 'This device for office',
  })
);
store.dispatch(
  createProduct({
    image:
      'https://laptopmedia.com/wp-content/uploads/2019/04/Acer-predator-helios-300-PH315-52-1.jpg',
    title: 'Acer Predator Helio 300',
    price: 4200,
    descrition: 'This device for game',
  })
);
store.dispatch(createProduct({
  image:"test",
  title:"test"
}));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello Redux</h1>
  </StrictMode>
);

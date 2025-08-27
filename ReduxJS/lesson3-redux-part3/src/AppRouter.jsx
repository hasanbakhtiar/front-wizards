import AddProduct from './pages/dashboard/AddProduct';
import Products from './pages/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/dashboard/product/add" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

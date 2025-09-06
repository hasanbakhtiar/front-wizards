import AddProduct from "./pages/dashboard/AddProduct";
import Products from "./pages/Products";
import Header from "./layout/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import EditProduct from "./pages/dashboard/EditProduct.jsx";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/dashboard/product/add" element={<AddProduct />}></Route>
        <Route
          path="/dashboard/product/edit/:id"
          element={<EditProduct />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

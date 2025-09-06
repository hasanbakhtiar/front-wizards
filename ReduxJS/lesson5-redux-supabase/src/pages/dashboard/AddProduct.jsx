import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { createProduct } from "../../tool/actions/productAction";

const AddProduct = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center my-5">Create Product</h1>
      <ProductForm
        sendData={(fd) => {
          dispatch(createProduct(fd));
        }}
      />
    </div>
  );
};

export default AddProduct;

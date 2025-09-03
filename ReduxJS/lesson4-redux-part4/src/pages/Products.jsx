import { useSelector } from "react-redux"
import SingleProduct from "../components/SingleProduct"

const Products = () => {
  const productData = useSelector(p=>p.product);
  return (
    <div className="container">
      <h1 className="text-center my-5">Products</h1>
      <div className="row g-3">
        {[...productData].reverse().map(item=>{
        return  <SingleProduct alldata={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Products
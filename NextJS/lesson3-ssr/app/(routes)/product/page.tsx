import { productType } from "@/app/types/product";
import slugify from "slugify";

const Product = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  return (
    <div>
      {products.map((item: productType, i: number) => (
        <a href={`product/${slugify(item.title)}`} key={i}>
          {item.title}
          <br />
        </a>
      ))}
    </div>
  );
};

export default Product;

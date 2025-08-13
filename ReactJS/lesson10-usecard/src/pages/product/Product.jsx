import { useContext } from 'react';
import SingleCard from '../../components/SingleCard';
import { ProductContext } from '../../context/ProductContext';
import { LangContext } from '../../context/LangContext';
const Product = () => {
const data = useContext(ProductContext);
  const [lang] = useContext(LangContext);
  return (
    <div className="container">
      <h1 className="text-center my-5">{lang==="az"?"Mehsullar":"Products"}</h1>
      <div className="row g-5">
        {data.map((item) => (
          <SingleCard alldata={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;

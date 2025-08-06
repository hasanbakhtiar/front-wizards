import { useEffect, useState } from 'react';
import SingleCard from '../../components/SingleCard';
import axios from 'axios';
const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center my-5">Products</h1>
      <div className="row g-5">
        {data.map((item) => (
          <SingleCard alldata={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;

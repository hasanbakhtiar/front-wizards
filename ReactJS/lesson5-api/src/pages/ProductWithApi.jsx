import SingleCard from '../components/SingleCard';
import Header from '../layout/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { PacmanLoader } from "react-spinners";
const ProductWithApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        if (res.status != 200) {
          alert('Something is wrong');
        } else {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center my-4">ProductWithApi Page</h1>
        <div className="row g-4">
          {data.length===0?<div className='d-flex align-items-center justify-content-center'><PacmanLoader /></div>:data.map((item) => (
            <SingleCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              price={item.price}
              imageUrl={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductWithApi;

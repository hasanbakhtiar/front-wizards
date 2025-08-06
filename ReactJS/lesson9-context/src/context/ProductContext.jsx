import axios from 'axios';
import { useState,createContext, useEffect } from 'react';


export const ProductContext = createContext();
  
export const ProductProvider = ({ children }) => {
 const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setData(res.data));
  }, []);
  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );
};

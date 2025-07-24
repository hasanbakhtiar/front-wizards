import SingleCard from '../components/SingleCard';
import Header from '../layout/Header';
import { productsData } from '../data/productsData';
const Products = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center my-4">Products Page</h1>
        <div className="row g-4">
          {productsData.map(item => (
            <SingleCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              price={item.price}
              imageUrl={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

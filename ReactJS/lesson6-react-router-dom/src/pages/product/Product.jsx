import SingleCard from '../../components/SingleCard';
const Product = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Products</h1>
      <div className="row g-5">
        <SingleCard myid={1} title="Asus Zenbook" price="3000" />
        <SingleCard myid={2} title="Asus Vivobook" price="3200" />
        <SingleCard myid={3} title="Asus Rog" price="3300" />
        <SingleCard myid={4} title="Asus Strix" price="3400" />
      </div>
    </div>
  );
};

export default Product;

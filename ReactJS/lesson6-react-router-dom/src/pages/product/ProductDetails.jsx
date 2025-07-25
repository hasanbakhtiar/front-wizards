import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return <h1 className='text-center my-5 text-danger'>{id}</h1>;
};

export default ProductDetails;

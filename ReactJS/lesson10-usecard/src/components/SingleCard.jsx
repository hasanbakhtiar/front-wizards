import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast,Bounce } from 'react-toastify';

const SingleCard = ({ alldata }) => {
  const { addItem } = useCart();
  const notify = () =>
    toast.success('Add to cart is successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <img
          src={alldata.image}
          height={200}
          style={{ objectFit: 'contain' }}
          className="card-img-top"
          alt={alldata.title}
        />

        <div className="card-body">
          <h4 className="card-title">{alldata.title.slice(0, 20)}...</h4>
          <h3 className="card-text">${alldata.price}</h3>
          <Button onClick={()=>{notify(addItem(alldata))}} variant="success">
            Add to cart
          </Button>
          <Link to={`/product/${alldata.id}`} className="ms-2 btn btn-dark">
            Read more
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SingleCard;

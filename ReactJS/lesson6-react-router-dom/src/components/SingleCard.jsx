import { Link } from "react-router-dom";

const SingleCard = ({ title, price, myid }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <Link to={`/product/${myid}`} className="btn btn-dark">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleCard;

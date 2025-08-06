import { Link } from "react-router-dom";

const SingleCard = ({ alldata }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
      <img src={alldata.image} height={200} style={{objectFit:'contain'}} className="card-img-top" alt={alldata.title}/>

        <div className="card-body">
          <h4 className="card-title">{alldata.title.slice(0,20)
          }...</h4>
          <h3 className="card-text">${alldata.price}</h3>
          <Link to={`/product/${alldata.id}`} className="btn btn-dark">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleCard;

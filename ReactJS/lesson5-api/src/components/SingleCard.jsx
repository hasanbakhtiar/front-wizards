const SingleCard = ({title,desc,imageUrl,price}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <img style={{"height":"300px","objectFit":"contain"}} src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-text">{price}</h6>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-dark">
            Add to card
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

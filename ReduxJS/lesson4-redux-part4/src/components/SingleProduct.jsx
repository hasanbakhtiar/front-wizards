
const SingleProduct = ({alldata}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card" >
                <img style={{objectFit:"contain",height:"200px"}} src={alldata.image} className="card-img-top" alt={alldata.title} />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title}</h5>
                    <p className="card-text">{alldata.description}</p>
                    <p className="card-text">${alldata.price}</p>
                    <a href="#" className="btn btn-warning">Read more</a>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct
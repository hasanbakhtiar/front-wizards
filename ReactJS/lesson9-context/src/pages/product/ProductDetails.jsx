import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useContext(ProductContext);
  const filterData = data.find(p=>p.id === Number(id));
  console.log(data)
  return (
    <div>
    {filterData === undefined?<p className='h1 text-center my-5'>Loading...</p>:<div className="container col-xxl-8 px-4 py-5">
          {' '}
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            {' '}
            <div className="col-10 col-sm-8 col-lg-6">
              {' '}
              <img
                src={filterData.image}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={700}
                height={500}
                loading="lazy"
              />{' '}
            </div>{' '}
            <div className="col-lg-6">
              {' '}
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                {filterData.title}{' '}
              </h1>{' '}
              <p className="lead">{filterData.description}</p>{' '}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  onClick={() => {
                                  navigate('/product');
                                }}
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Back
                </button>{' '}
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  ${filterData.price}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
    }</div>
      );
};

export default ProductDetails;

import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../tool/actions/productAction';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const dispatch = useDispatch();
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null);
    const navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct({ image: imageRef.current.value, title: titleRef.current.value, price: priceRef.current.value, descrition: descriptionRef.current.value }))
        navigate('/')
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="col-5">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input ref={imageRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={titleRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input ref={priceRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input ref={descriptionRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-warning">Create</button>
                </form>
            </div>
        </div>

    )
}

export default ProductForm
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../tool/actions/productAction';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ editData, sendData }) => {
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null);
    const formSubmit = (e) => {
        e.preventDefault();
        sendData({ image: imageRef.current.value, title: titleRef.current.value, price: priceRef.current.value, description: descriptionRef.current.value })

    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="col-5">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input defaultValue={editData ? editData.image : ""} ref={imageRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input defaultValue={editData ? editData.title : ""} ref={titleRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input defaultValue={editData ? editData.price : ""} ref={priceRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input defaultValue={editData ? editData.descrition : ""} ref={descriptionRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-warning">Create</button>
                </form>
            </div>
        </div>

    )
}

export default ProductForm
import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import { editProduct } from '../../tool/actions/productAction';

const EditProduct = () => {
  const {slug} = useParams();
  const dispatch = useDispatch();
  const navidate = useNavigate();
  const product = useSelector(p=>p.product);
  const singleProduct = product.find(p=>slugify(p.title,{lower:true})===slug);
  console.log(singleProduct);
  
  return (
    <div>
        <h1 className='text-center my-5'>Edit Product</h1>
        <ProductForm editData = {singleProduct} sendData={fd=>{
          dispatch(editProduct(singleProduct.id,fd));
          navidate('/dashboard')
        }}/>
    </div>
  )
}

export default EditProduct
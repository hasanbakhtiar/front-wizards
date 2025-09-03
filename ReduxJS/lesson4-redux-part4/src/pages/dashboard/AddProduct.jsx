import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../tool/actions/productAction'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-5'>Create Product</h1>
        <ProductForm sendData={fd=>{
          dispatch(createProduct(fd));
          navigate('/')
        }} />
    </div>
  )
}

export default AddProduct
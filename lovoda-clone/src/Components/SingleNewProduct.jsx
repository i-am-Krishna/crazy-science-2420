import React from 'react'
import {BsHeart} from 'react-icons/bs'
import './singleProduct.css'

const SingleNewProduct = ({id,image1,image2,title,price}) => {
  return (
    <div className='single_new_product'>
        <img src={image1} alt={title} />
        <div className='div_icon'><BsHeart className='heart_icon'/></div>

        <p className='single_product_title'>{title}</p>
        <p className='single_product_price'>${price}.00</p>
    </div>
  )
}

export default SingleNewProduct
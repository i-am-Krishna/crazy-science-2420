import React from 'react'
import {BsHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./productCard.css"

const ProductCard = ({id,imageUrl_1,imageUrl_2,name,price}) => {
  return (
    <div>
        <div className='single_new_product'>
            <Link to={`/${id}`}>

        <div className='card'>
            <img src={imageUrl_1} alt={name} />
            <img src={imageUrl_2} alt={name} className="img-top"/>
        </div> 
            <div className='div_icon'><BsHeart className='heart_icon'/></div>

            <p className='single_product_title'>{name}</p>
            <p className='single_product_price'>${price}</p>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard


/* 
<div className='single_new_product'>
        <div className='card'>
        <img src={image1} alt={title} />
        <img src={image2} alt={title} className="img-top"/>
        </div> 
        <div className='div_icon'><BsHeart className='heart_icon'/></div>
        <p className='single_product_title'>{title}</p>
        <p className='single_product_price'>${price}.00</p>


        .single_new_product{
    width:16.5rem;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    cursor: pointer;
    margin: .8rem 0;
}
.single_new_product img{
width: 100%;
height: 80%;
}
.div_icon{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: white;
    z-index: 100;
    position: fixed;
    top: 0;
    font-size: 1rem;
    padding: .4rem;
    color: rgb(239, 166, 77);
}
.single_new_product:hover{
text-decoration: underline;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.single_product_title{
margin-top: .5rem;
}
.single_product_price{
font-size:17px;
margin:1rem 0;
}
.card { 
        position: relative;
        display: inline-block;
    }
.img-top {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
.card:hover .img-top {
        display: inline;
        width: 100%;
        height: 100%;
    }

*/
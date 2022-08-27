import React from 'react'
import './productDetails.css'
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { allDatas } from '../../Redux/Allpage/action';
import {TiMessages} from 'react-icons/ti'
import {AiOutlineStar} from 'react-icons/ai'
import axios from 'axios';
import { postTodosRequest, postTodosSuccess, setCartData, } from '../../Redux/App/action';
const ProductDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentProduct,setCurrentProduct] = useState({});
  const [number,setNumber] = useState(1);
  const [data,setData] = useState([])

const product = useSelector((store)=> store.allPage.arr);

useEffect(()=>{
if(product.length === 0){
  dispatch(allDatas())
}
},[dispatch,product.length])

useEffect(()=>{
if(id){
  const singleProduct = product.find((item)=> item.id === Number(id))
  singleProduct && setCurrentProduct(singleProduct)
}
},[id,product])

 

const handleCartClick=({currentProduct})=>{

//  dispatch(setCartData(currentProduct)).then((res)=>setData(res.data)).then(()=> navigate('/cart'))
}




 







  return (
    <>
    <div className='product_main_section'> 
      <div className='upper_part'>

{/*  Images Section */}

        <div className='product_images_section'>
          <div className='first_product_image'>
            <img src={currentProduct.imageUrl_1} alt={currentProduct.name} />
          </div>
          <div className='second_third_product_image'>
            <div className='second_image'>
    <img src={currentProduct.imageUrl_2} alt={currentProduct.name} />
            </div>
            <div className='third_image'>
    <img src={currentProduct.imageUrl_3} alt={currentProduct.name}/>
            </div>
          </div>
        </div>

{/*  Details Section */}

        <div className='product_details_section'>
      <p className='small_top_logo'>LOVODA</p>
      <div className='name_title'>{currentProduct.name}</div>
      <div className='rating_div'> 
        <AiOutlineStar className='rating_star'/> 
        <AiOutlineStar className='rating_star'/> 
        <AiOutlineStar className='rating_star'/> 
        <AiOutlineStar className='rating_star'/> 
        <AiOutlineStar className='rating_star'/> 
        <span>Write a review</span>
      </div>
      <div className='message_box'> |   <TiMessages/> Ask a question</div>

<p className='price_section'>${currentProduct.price}.00</p>

    <div className='logo_and_pay' >
      <p className='afterpay_logo' >afterpay</p>
      available for orders between $35 - $1,000 
    </div>

    <p className='shipping_calculated'>Shipping calculated at checkout.</p>

    <p className='interest_free'>Pay in 4 interest-free installments for orders over $50</p>

    <div >
      <p className='quantity'>Quantity</p>
      <div className='counter'>
        <button  onClick={()=>{if(number>1) {setNumber(number-1)}}}>-</button>
        {number}
        <button onClick={()=>setNumber(number+1)}>+</button>
      </div>
    </div>

    <div className='button_box'>
      <Link to={'/cart'}>
      <button onClick={handleCartClick} className='cart_buttons'>Add to cart</button>
      </Link>
  
      <button className='cart_buttons'>Add to Wishlist</button>
 
 <Link to='/cart/information'>
      <button className='cart_buttons buy_button'>Buy it now</button>
 </Link>
 
    </div>


<div className='leaf_design'>
  <p>An ear cuff of a fern leaf design in gold!</p>
  <ul>
    <li className='li'>Stainless Steel</li>
    <li className='li'> 14k Gold Plating</li>
  </ul>

  <p>Measurement:</p>
  <ul>
    <li className='li'>0.50in x 0.25in / 1.27cm x 0.64cm</li>
  </ul>
</div>

        </div>
      </div>
       
 
     </div>
     <div className='FeaturedContainer'>
        <div>
          <h3>Featured Collection</h3>
        </div>
        <div className={'imageContainerTwo'}>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100309-1__20452_360x.jpg?v=1645111798"
              }
            />
            <p>10mm Palette Earrings (14k Gold)</p>
            <p>$12.00</p>
          </div>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100310-3__23072_360x.jpg?v=1645111847"
              }
            />
            <p>10mm Palette Earrings (14k Rose Gold)</p>
            <p>$12.00</p>
          </div>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100440-3__37743_360x.jpg?v=1645113344"
              }
              />
            <p>10mm Palette Earrings | Bubble Gum Pink (14k)</p>
            <p>$12.00</p>
          </div>
          <div>
            <img
              src={
                "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100443-1__54184_360x.jpg?v=1645113115"
              }
              />
            <p>10mm Palette Earrings | Neon Pink (14k)</p>
            <p>$12.00</p>
          </div>
        </div>
        <div className={'viewbtn'}>
          <button>View all</button>
        </div>
      </div>
              </>
  )
}

export default ProductDetails
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../../Components/HomePageComponents/ProductCard';
import {getHomePageData} from "../../Redux/HomePage/action"
import { PosterCard } from '../../Components/HomePageComponents/PosterCard';
import { ImageCollage } from '../../Components/HomePageComponents/ImageCollage';
import "./homePage.css"

export const HomePage = () => {
  const dispatch = useDispatch();
  let product = useSelector((state)=>state.homepage.HomePageData)
  console.log("s",product)

  useEffect(()=>{
    if(product.length === 0){
      dispatch(getHomePageData());
    }
  },[])


  return (
    <div>
        <div>
          <PosterCard/>
        </div>

        <div className='new_product'>
          {product.length>0 && product.map((item)=>(
            <ProductCard key={item.id} {...item}/>
          ))}
        </div>
            <br /><br />
        <div>
          <ImageCollage/>
        </div>
    </div>
  )
}




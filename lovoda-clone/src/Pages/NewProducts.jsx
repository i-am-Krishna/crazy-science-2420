import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleNewProduct from '../Components/SingleNewProduct'
import { getNewPageData } from '../Redux/NewPage/action'
import './newProduct.css'

const NewProducts = () => {
    const products = useSelector((store)=>store.newPage.newPageData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNewPageData())
    },[])

  return (
    <div className='new_product'>
        {products.length > 0 && products.map((item)=>(
        <SingleNewProduct key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default NewProducts
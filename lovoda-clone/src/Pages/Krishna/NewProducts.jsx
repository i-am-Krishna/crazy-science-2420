import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import FilterSort from '../../Components/Filter/Filter&Sort'
import SingleNewProduct from '../../Components/SingleProduct/SingleNewProduct'
import { getNewPageData } from '../../Redux/NewPage/action'
import './newProduct.css'

const NewProducts = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const products = useSelector((store)=>store.newPage.newPageData)
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(getNewPageData())
    // },[])

    useEffect(()=>{
        if(location || products.length === 0){
            const sortBy = searchParams.get('sortBy')
            const queryParams = {
                params:{
                    _sort: sortBy && "price",
                    _order: sortBy,
                }
            }
            dispatch(getNewPageData(queryParams))
        }
    },[location.search])


  return (
    <>
    <p className='header_title'>New</p>
    <div><FilterSort length={products.length}/></div>
    <div className='new_product'>
        {products.length > 0 && products.map((item)=>(
            <SingleNewProduct key={item.id} {...item}/>
        ))}
    </div>
            </>
  )
}

export default NewProducts
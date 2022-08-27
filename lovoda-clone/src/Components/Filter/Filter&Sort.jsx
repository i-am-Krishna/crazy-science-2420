import React from 'react'
import {useSearchParams} from 'react-router-dom';
import {RiArrowDropDownLine} from 'react-icons/ri'
import { useState } from 'react';
import { useEffect } from 'react';
import './filterSort.css'
import { useSelector } from 'react-redux';
import { getNewPageData } from '../../Redux/NewPage/action';
const FilterSort = ({length}) => {

  const [searchParams,setSearchParams] = useSearchParams()
  const urlSort = searchParams.get("sortBy");
  const [sortBy,setSortBy] = useState(urlSort || '');
  const products = useSelector((store)=> store.newPage.newPageData)

  useEffect(()=>{
    if(products.length === 0){
      getNewPageData();
    }
  },[])


const handleChange=(e)=>{
  setSortBy(e.target.value)
}

useEffect(()=>{
if(sortBy){
  setSearchParams({sortBy})
}
},[sortBy,setSearchParams])

  return (
    <div className='filter_sort'>
        <div>Filter:   Price <RiArrowDropDownLine/>    Availability <RiArrowDropDownLine/></div>
        <div>
          <label style={{padding:"0 20px"}}>
            Sort by: 
          <select name='sortBy' onChange={handleChange} style={{padding:"0 20px",border:"none"}}>
            <option>Featured</option> 
            <option value="asc" defaultChecked={sortBy === 'asc'}>Price, low to high</option>
            <option value="desc" defaultChecked={sortBy === 'desc'}>Price, high to low</option>
          </select>
          </label>
          <span  style={{padding:"0 20px"}}>  {length} products</span>
          
        </div>
    </div>
  )
}

export default FilterSort
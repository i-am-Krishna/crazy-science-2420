import React from 'react'
import "./posterCard.css"
import { Link } from 'react-router-dom'

export const PosterCard = () => {
  return (
    <div>
        <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_1500x.jpg?v=1645120932" alt="" className='bigimage' />
        <div className='centered'> 
            <h2>NEW NEW NEW</h2>
            <p>Check out the new beauties</p><br /><br />
            <Link to={'/all_products'}>
            <div className='shopAll_button'>Shop All</div>
            </Link>
        </div>
    </div>
  )
}

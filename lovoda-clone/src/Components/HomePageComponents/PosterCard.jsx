import React from 'react'
import "./posterCard.css"

export const PosterCard = () => {
  return (
    <div>
        <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_1500x.jpg?v=1645120932" alt="" className='bigimage' />
        <div className='centered'> 
            <h2>NEW NEW NEW</h2>
            <p>Check out the new beauties</p>
            <div className='shopAll_button'>Shop All</div>
        </div>
    </div>
  )
}
import React from 'react'
import './allPage.css'
import { BsSearch } from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {CgShoppingBag} from 'react-icons/cg'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div style={{width:"100%",height:"35px",alignItems:"center"}} className='uppernav'>
        <p style={{marginLeft:"33%"}}>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
      </div>
      <div style={{display:"flex",height:"90px",alignItems:"center",justifyItems:"center"}} className='navbar'>
        <div style={{marginLeft:"12%",display:"flex",alignItems:"center",justifyItems:"center"}} className='navin'>
          
          <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264" alt="Logo" style={{height:"70%"}} />
          <p style={{marginLeft:"60px",fontWeight:'lighter'}}>Home</p>
          <p style={{marginLeft:"20px" ,fontWeight:'lighter'}}>New</p>
          <p style={{marginLeft:"20px",fontWeight:'lighter'}}>Shop All</p>
          <p style={{marginLeft:"20px",fontWeight:'lighter'}}>Earrings</p>
          <p style={{marginLeft:"20px",fontWeight:'lighter'}}>Necklaces</p>
          <p style={{marginLeft:"20px",fontWeight:'lighter'}}>Bracelets</p>
          <p style={{marginLeft:"20px",fontWeight:'lighter'}}>Rings</p>
          <p style={{marginLeft:"20px",fontWeight:'lighter'}}>Shop Social</p>
        </div>
        <div style={{display:"flex"}}>
          <div style={{marginLeft:"300px"}}>
            <BsSearch className='bssearch'/>
          </div>
          <div style={{marginLeft:"28px"}}>
            <BiUser className='bssearch'/>
          </div>
          <div style={{marginLeft:"28px"}}>
            <CgShoppingBag className='bssearch'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './allPage.css'
import { BsSearch } from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {CgShoppingBag} from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div className='uppernav'>
        <p style={{borderTop:"none",fontSize:"14px",padding:"2rem"}}>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
      </div>
      <div style={{display:"flex",height:"100px",alignItems:"center",justifyItems:"center"}} className='navbar'>
        <div style={{marginLeft:"12%",display:"flex",alignItems:"center",justifyItems:"center"}} className='navin'>
          <Link to='/'>
          <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264" alt="Logo" style={{height:"70%"}} />
          </Link>
          <NavLink to='/' style={({isActive})=>{return {textDecoration : isActive ? "underline":"none"}}}>
          <p style={{marginLeft:"60px"}}>Home</p>
          </NavLink>
          <NavLink to='/new_products'  style={({isActive})=>{return {textDecoration : isActive ? "underline":"none"}}}>
          <p style={{marginLeft:"20px" ,textDecoration:"none"}}>New</p>
          </NavLink>
          <NavLink to='/all_products'  style={({isActive})=>{return {textDecoration : isActive ? "underline":"none"}}}>
          <p style={{marginLeft:"20px"}}> Shop All</p>
          </NavLink>
          <p style={{marginLeft:"20px"}}>Earrings</p>
          <p style={{marginLeft:"20px"}}>Necklaces</p>
          <p style={{marginLeft:"20px"}}>Bracelets</p>
          <p style={{marginLeft:"20px"}}>Rings</p>
          <p style={{marginLeft:"20px"}}>Shop Social</p>
        </div>
        <div style={{display:"flex"}}>
          <div style={{marginLeft:"300px"}}>
            <BsSearch className='bssearch'/>
          </div>
          <div style={{marginLeft:"28px"}}>
            <BiUser className='bssearch'/>
          </div>
          <div style={{marginLeft:"28px"}}>
            <Link to={'/cart'}>
            <CgShoppingBag className='bssearch'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
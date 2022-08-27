import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { HomePage } from '../Pages/Rushikesh/HomePage'
import AllPages from '../Components/ShopAll/AllPages'
import NewProducts from '../Pages/Krishna/NewProducts'
import CartPage from '../Pages/Swati/CartPage'
import PaymentPage from '../Pages/Swati/PaymentPage'
import RequiredAuth from '../Components/Authentication/RequiredAuth'
import PaymentSuccess from '../Pages/Alok/PaymentSuccess'
import Signin from '../Components/Auth/signin'
import Signup from '../Components/Auth/signup'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/new_products' element={<NewProducts/>}/>
        <Route path='/all_products' element={<AllPages/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart/information' element={
            <RequiredAuth>
        <PaymentPage/>
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping/payment' element={
            <RequiredAuth>
        <PaymentSuccess/>
            </RequiredAuth>
        }/>
    </Routes>
  )
}

export default MainRoutes
  
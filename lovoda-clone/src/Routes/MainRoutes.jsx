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
import ProductDetails from '../Pages/Krishna/ProductDetails'
import OrderComplete from '../Pages/Alok/OrderComplete'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:id' element={<ProductDetails/>} />

        <Route path='/new_products' element={<NewProducts/>}/>
        <Route path='/new_products/:id' element={<ProductDetails/>}/>

        <Route path='/all_products' element={<AllPages/>}/>
        
        <Route path='/all_products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/cart/information' element={
            <RequiredAuth>
        <PaymentPage/>
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping' element={
            <RequiredAuth>
        <PaymentPage/>
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping/payment' element={
            <RequiredAuth>
        <PaymentSuccess/>
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping/payment/order_successful' element={
            <RequiredAuth>
        <OrderComplete/>
            </RequiredAuth>
        }/>
    </Routes>
  )
}

export default MainRoutes
  
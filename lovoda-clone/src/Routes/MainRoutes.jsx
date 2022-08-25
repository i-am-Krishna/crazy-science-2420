import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import AllPages from '../Components/AllPages'
import NewProducts from '../Pages/NewProducts'
import CartPage from '../Pages/CartPage'
import PaymentPage from '../Pages/PaymentPage'
import RequiredAuth from '../Components/RequiredAuth'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/new_products' element={<NewProducts/>}/>
        <Route path='/all_products' element={<AllPages/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/cart/payment' element={
            <RequiredAuth>
        <PaymentPage/>
            </RequiredAuth>
        }/>
    </Routes>
  )
}

export default MainRoutes
  
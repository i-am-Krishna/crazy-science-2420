import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllPages from './AllPages'
import Navbar from './Navbar'

const Routing = () => {
  return (
    <div>
        
        <Routes>
          <Route path='/' element={<Navbar/>}/>
            <Route exact path='/allpages' element={<AllPages/>}/>
        </Routes>
    </div>
  )
}

export default Routing
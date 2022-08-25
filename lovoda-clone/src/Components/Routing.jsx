import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllPages from './AllPages'

const Routing = () => {
  return (
    <div>
        //Routing page start
        <Routes>
            <Route exact path='/allpages' element={<AllPages/>}/>
        </Routes>
    </div>
  )
}

export default Routing
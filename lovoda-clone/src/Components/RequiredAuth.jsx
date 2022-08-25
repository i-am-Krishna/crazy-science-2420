import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';
const RequiredAuth = ({children}) => {
  const location = useLocation();
  const isAuth = useSelector((store)=>store.auth.isAuth)

  if(!isAuth){
    return <Navigate to='/login' state={{from:location}} replace/>
  }

  return children;
}
export default RequiredAuth
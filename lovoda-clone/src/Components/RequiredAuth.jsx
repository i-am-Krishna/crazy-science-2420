import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
const RequiredAuth = () => {
  const location = useLocation();
  const isAuth = useSelector((store)=>store.Auth.isAuth)

  if(!isAuth){
    return <Navigate to='/login' state={{from:location}} replace/>
  }
  return children;
}
export default RequiredAuth
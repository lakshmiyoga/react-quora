import React, { Children } from 'react'
import Login from '../Login/Login'
import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => { 
   const loggedIn =  sessionStorage.getItem('email')
   console.log("loggedIn",loggedIn);
  return (
    loggedIn ? <Outlet/> : <Login/>
  )
}

export default ProtectedRoute

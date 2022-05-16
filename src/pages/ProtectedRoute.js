import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {isAuth , user} = useSelector(store => store.user)
  if(!isAuth) return <Navigate to='/landing'/>
  return <>{children}</>
}

export default ProtectedRoute
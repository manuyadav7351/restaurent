import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from './store/features/register/registerSlice'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return children;
      } else {
        return <Navigate to="/login" />;
      }
}

export default ProtectedRoute
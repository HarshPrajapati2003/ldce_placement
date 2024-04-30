import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from './Authentication/Redux/AuthSlice'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const user = useSelector(selectLoggedInUser)
    return (
      <>
        {user ? (
          <>{children}</>
        ) : (
          <Navigate to="/auth/signin" replace={true}></Navigate>
        )}
      </>
    );
}

export default Protected
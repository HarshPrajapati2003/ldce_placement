import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAsync, selectLoggedInUser } from './Authentication/Redux/AuthSlice'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { fetchStudentDataAsync } from './Form/Redux/FormSlice'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()
  const checkAuth = async () => {
    try {
      const response = await api.get('/api/auth/home');
      // console.log('usedata is here : ', response.data.user);
      dispatch(
        loginUserAsync({
          email: response.data.user.email,
          password: response.data.user.password,
        }),
      );
      dispatch(fetchStudentDataAsync(response.data.user._id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
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
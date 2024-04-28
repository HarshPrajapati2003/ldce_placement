import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import DefaultLayout from '../../layout/DefaultLayout';
import {resetPasswordRequestAsync, selectError, selectMailSent} from './Redux/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
const ForgotPassword = () => {
   const mailSent = useSelector(selectMailSent);
   console.log('mailSent', mailSent);
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const error = useSelector(selectError);
  const [mail, setmail] = useState("")
  const dispatch = useDispatch();
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Forgot Password" />

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link className="flex justify-center" to="/">
              <img className="hidden dark:block" src={Logo} alt="Logo" />
              <img className="dark:hidden" src={LogoDark} alt="Logo" />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Enter email to reset password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                reset();
                console.log(data);
                dispatch(resetPasswordRequestAsync(data.email));
                setmail(data.email);
              })}
              className="space-y-6 contents"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Your registered Email address :
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: 'email is not valid',
                      },
                    })}
                    type="email"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                  {mailSent && (
                    <p className="text-green-500">We sent you Password reset link on {mail}</p>
                  )}
                  {error && (
                    <p className="text-red-500">{error}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Email
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Send me back to{' '}
              <Link
                to="/auth/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ForgotPassword;

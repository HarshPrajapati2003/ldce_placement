import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import DefaultLayout from '../../layout/DefaultLayout';
import {
  resetPasswordAsync,
  selectError,
  selectPasswordReset,
} from './Redux/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { token,id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const error = useSelector(selectError);
    const dispatch = useDispatch();
    const passwordReset = useSelector(selectPasswordReset);
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Reset Password" />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link className="flex justify-center" to="/">
              <img className="hidden dark:block" src={Logo} alt="Logo" />
              <img className="dark:hidden" src={LogoDark} alt="Logo" />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Enter New Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                reset();
                console.log(data);
                dispatch(
                    resetPasswordAsync({
                    id,token,
                    newPassword: data.password,
                    confirmPassword: data.confirmPassword
                  }),
                );
              })}
              className="space-y-6 contents"
              method="POST"
            >
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                        message: `- at least 8 characters\n
                              - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                              - Can contain special characters`,
                      },
                    })}
                    type="password"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm New Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    {...register('confirmPassword', {
                      required: 'Confirm password is required',
                      validate: (value, formValues) =>
                        value === formValues.password ||
                        'Password not matching',
                    })}
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  {passwordReset && (
                    <p className="text-green-500">
                      Password Reset Successfully!
                    </p>
                  )}
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
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

export default ResetPassword;

import Breadcrumb from '../components/Breadcrumbs/Breadcrumb.jsx';
import DefaultLayout from '../layout/DefaultLayout.jsx';
import CoverOne from '../images/cover/cover-01.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Protected from './Protected.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './Authentication/Redux/AuthSlice.jsx';
import { fetchStudentDataAsync, selectProfileError, selectStudentProfile } from './Form/Redux/FormSlice.jsx';
import { useForm } from 'react-hook-form';

const CheckCompany = () => {
  const [loadBtn,setLoadBtn]=useState(false)
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [companyData, setComapnyData] = useState();
 
  const user = useSelector(selectLoggedInUser);
  const [eligibleCompanies, setEligibleCompanies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectProfileError);
  const studentProfile = useSelector(selectStudentProfile);
  const [idPresent,setIdPresent]=useState(false)
  const fetchStudentData = async () => {
    try {
      if (user && user.data && user.data._id && !error) {
        const studentID = user.data._id;
        dispatch(fetchStudentDataAsync(studentID));
      } else if (error || !studentProfile) {
        navigate('/forms/registration-form');
      } else {
        navigate('/auth/signin');
        console.error('User data or user ID is undefined.');
      }
    } catch (error) {
      // Handle error here
      navigate('/forms/registration-form');
      console.error('Error fetching student data:', error);
    }
  };
 const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      resume: studentProfile?.data?.resume,
    }
  });
  useEffect(() => {
    // Update studentData when studentProfile changes
    if (studentProfile && studentProfile.data) {
      setEligibleCompanies(studentProfile.data.eligibleCompanies);
      setIdPresent(isIdPresent());
      // console.log(studentProfile.data.eligibleCompanies);
    }
    // else {
    //    navigate('/forms/registration-form');
    // }
  }, [studentProfile, eligibleCompanies]);

  const fetchCompanyData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/company/fetch-company/${id}`,
      );
      if (res) {
        setComapnyData(res.data.company);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Sorry, ${error.response.data.message}`);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchStudentData();
    fetchCompanyData()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle error if needed
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to check if id is present in eligibleCompanies array
  const isIdPresent = () => {
    return eligibleCompanies.includes(id);
  };

  const onSubmit = async (data) => {
    setLoadBtn(true)
     try {
      const res = await axios.patch('http://localhost:5000/student/apply-job', {
        resume: data.resume,
        studentId: studentProfile.data._id,
        companyId: id
      });
       
       if (res.status == 200) {
         toast.success(`${res.data.message}`, {
           duration: 5000,
         });
       }
     } catch (error) {
      console.log(error);
      toast.error(`sorry, ${error.response.data.message}`);
     }
      setLoadBtn(false);
      setShowModal(false);
      console.log(data);
    };

  return (
    <Protected>
      <DefaultLayout>
        <Breadcrumb pageName="Company Profile" />
        <Toaster position="top-center" reverseOrder={false} />
        {loading && (
          <div role="status" className="flex justify-center">
            <button
              disabled=""
              type="button"
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg text-xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          </div>
        )}
        {companyData && (
          <div>
            <div className="h-full bg-gray-200 p-1 md:p-5">
              <div className="bg-white rounded-lg shadow-xl pb-8">
                <div className="w-full h-[150px]">
                  <img
                    src={CoverOne}
                    className="w-full h-full rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex flex-col items-center -mt-20">
                  <img
                    src={companyData.logo}
                    className="w-40 h-40 border-2 border-inherit rounded-full object-contain bg-white"
                  />
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl font-bold text-center text-primary">
                      {companyData.companyName}
                    </p>
                    <span
                      className="bg-blue-500 rounded-full p-1 text-white"
                      title="Verified"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-100 h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-gray-700 text-center p-3 mx-1 sm:mx-4">
                    {companyData.description}
                  </p>
                  <p className="text-sm text-gray-500 text-center p-1 font-bold text-primary">
                    {companyData.location}
                  </p>
                </div>
                <div className="flex-1 flex flex-row items-center lg:items-end justify-between px-8 mt-2">
                  <div>
                    <Link to="/recent-companies">
                      <button className="flex items-center bg-primary hover:bg-green-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-undo-2"
                        >
                          <path d="M9 14 4 9l5-5" />
                          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                        </svg>
                        <span className="text-white hidden sm:flex">Back</span>
                      </button>
                    </Link>
                  </div>
                  {idPresent && (
                    <div
                      className={`${
                        new Date(companyData.lastDate)
                          .toISOString()
                          .split('T')[0] <
                          new Date().toISOString().split('T')[0] && 'hidden'
                      }`}
                    >
                      <button
                        className="flex items-center bg-green-500 hover:bg-green-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100 text-white"
                        onClick={() => setShowModal(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-square-mouse-pointer"
                        >
                          <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                          <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                        </svg>
                        <span className="text-white flex">Apply</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col">
                  <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8 mt-4">
                    <h4 className="text-xl text-primary font-bold">
                      Company Information
                    </h4>
                    <ul className="mt-2 text-gray-700 text-sm md:text-base">
                      <li className="flex border-y border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Company Name :
                        </span>
                        <span className="text-gray-700">
                          {companyData.companyName}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Location :
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          {companyData.location}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Job Position :
                        </span>
                        <span className="text-gray-700">
                          {companyData.position}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Last Date To Apply :
                        </span>
                        <span
                          className={`text-gray-700 font-bold ${
                            new Date(companyData.lastDate)
                              .toISOString()
                              .split('T')[0] <
                            new Date().toISOString().split('T')[0]
                              ? 'text-red-500' // Apply red color if lastDate is in the past
                              : 'text-green-500' // Apply green color if lastDate is today or in the future
                          }`}
                        >
                          {new Date(companyData.lastDate).toLocaleDateString(
                            'en-IN',
                          )}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Annual Package :
                        </span>
                        <span className="text-gray-700">
                          {companyData.packageLPA}
                          {' LPA'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col">
                  <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8 mt-4">
                    <h4 className="text-xl text-primary font-bold">
                      Eligibility Criteria
                    </h4>
                    <ul className="mt-2 text-gray-700 text-sm md:text-base">
                      <li className="flex border-y border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">Course :</span>
                        <span className="text-gray-700">
                          {companyData.course == 'Both'
                            ? 'UG & PG both students are eligible'
                            : `Only ${companyData.course} students are eligible`}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Minimum CPI Criteria :
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          {companyData.minCPI == 0
                            ? 'No Minimum CPI Criteria'
                            : `Minimum ${companyData.minCPI} CPI is required`}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Minimum SPI Criteria :
                        </span>
                        <span className="text-gray-700">
                          {companyData.minSPI == 0
                            ? 'No Minimum SPI Criteria'
                            : `Minimum ${companyData.minSPI} SPI is required`}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-50">
                          Departments :
                        </span>
                        <span className="w-auto sm:w-auto">
                          {companyData.departments.map((department, index) => (
                            <span key={index}>
                              {department}
                              {index !== companyData.departments.length - 1 &&
                                ', '}
                            </span>
                          ))}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full mt-4">
                <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8">
                  <h4 className="text-xl text-primary font-bold">
                    Address Information
                  </h4>
                  <p className="mt-2 text-gray-700 text-sm sm:text-md">
                    {companyData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-lg md:text-3xl font-semibold text-primary">
                      Upload Your Resume
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative p-6 flex-auto">
                      <div className="mb-6">
                        <label
                          htmlFor="resume"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Upload Your Resume/Portfolio Link
                        </label>
                        <input
                          {...register('resume', {
                            required: 'Resume/Portfolio link is required',
                            pattern: {
                              value: /^(ftp|http|https):\/\/[^ "]+$/,
                              message: 'Invalid URL pattern',
                            },
                          })}
                          type="text"
                          id="resume"
                          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.resume && 'border-red-500'}`}
                        />
                        {errors.resume && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.resume.message}
                          </p>
                        )}
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 hover:text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-600 text-white hover:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        disabled={loadBtn == true ? true : false}
                      >
                        {loadBtn && (
                          <svg
                            aria-hidden="true"
                            role="status"
                            class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="#1C64F2"
                            ></path>
                          </svg>
                        )}
                        Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </DefaultLayout>
    </Protected>
  );
};

export default CheckCompany;

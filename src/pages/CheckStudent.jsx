import Breadcrumb from '../components/Breadcrumbs/Breadcrumb.jsx';
import DefaultLayout from '../layout/DefaultLayout.jsx';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Protected from './Protected.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './Authentication/Redux/AuthSlice.jsx';
import axios from 'axios';
import {
  fetchStudentDataAsync,
  selectProfileError,
  selectStudentProfile,
} from './Form/Redux/FormSlice.jsx';
import { generatePDF } from './Form/GeneratePDF.jsx';
import toast, { Toaster } from 'react-hot-toast';


const CheckStudent = () => {
  const [loading,setLoading]=useState(false)
  const { id, isVerified } = useParams()
  const user = useSelector(selectLoggedInUser);
  const [studentData, setStudentData] = useState();
  const navigate = useNavigate();
  const [render, isRender] = useState(false);

  useEffect(() => {
    if (user) {
      if (user?.data?.role !== 'TPO') {
        navigate('/');
      }
    }
  }, []);
   const handleStatusChange = async (selectedStatus, id) => {
     // Update the state with the selected status
     setStudentData((prevStudent) => ({
       ...prevStudent,
       isVerified: selectedStatus.toLowerCase(),
     }));
     isRender(!render);
     console.log(studentData);
     try {
       const res = await axios.patch(
         'http://localhost:5000/student/check-profile',
         { id, isVerified: selectedStatus.toLowerCase() },
       );
       if (res) {
         // Update the state with the response data
         setStudentData(res.data.students);
         toast.success(res.data.message);
         isRender(!render);
       }
     } catch (error) {
       console.log(error);
       toast.error(`Sorry, ${error.response.data.message}`);
     }
   };
  const fetchStudentData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/student/check-profile/${id}`)
      if (res) {
        setStudentData(res.data.student);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Sorry, ${error.response.data.message}`);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchStudentData()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle error if needed
        console.error('Error fetching data:', error);
      });
  }, [render]);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Check Profile" />
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
        {studentData && (
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
                    src={studentData.photo}
                    className="w-40 h-40 border-2 border-inherit rounded-full object-contain bg-white"
                  />
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl font-bold text-center text-slate-900">
                      {studentData.firstName} {studentData.lastName}
                    </p>
                    {studentData.isVerified == 'verified' && (
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
                    )}
                  </div>
                  <p className="text-gray-700 text-center p-1">
                    {studentData.department}, {studentData.passingYear}
                  </p>
                  <p className="text-sm text-gray-500 text-center p-1 font-bold text-primary">
                    Registration ID : {studentData._id}
                  </p>
                </div>
                <div className="flex-1 flex flex-row items-center lg:items-end justify-between px-8 mt-2">
                  <div>
                    <Link to="/verify-student">
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
                  <div>
                    <select
                      id="small"
                      className="block w-30 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) =>
                        handleStatusChange(e.target.value, studentData._id)
                      }
                    >
                      <option value="Pending" selected disabled>
                        Pending
                      </option>
                      <option value="Verified">Verified</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </div>
                </div>
              </div>
              {studentData.isVerified && (
                <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8 break-all sm:break-normal">
                  <h4 className="text-xl text-primary font-bold">
                    Verification Status
                  </h4>
                  <div className="relative pt-4">
                    <div className="absolute h-full border border-dashed border-opacity-20 border-secondary" />
                    {/* start::Timeline item */}
                    {studentData.isVerified == 'pending' && (
                      <div className="flex w-full border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                        <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-warning bg-opacity-30 hidden sm:flex">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                              fill="#FBBF24"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-full">
                          <h5 className="mb-3 text-lg font-semibold text-[#9D5425]">
                            Verification is pending
                          </h5>
                          <p className="leading-relaxed text-[#D0915C]">
                            Kindly contact your departmental Training and
                            Placement Officer (TPO) as soon as possible.
                            Schedule a meeting with your TPO and bring along all
                            your academic results. Please provide your
                            <b> registration ID ({studentData._id}) </b>
                            for reference. Additionally, ensure to bring any
                            personal proof or documents that you submitted
                            during the placement registration process for final
                            verification.
                          </p>
                        </div>
                      </div>
                    )}
                    {/* end::Timeline item */}
                    {studentData.isVerified == 'verified' && (
                      <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                        <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399] hidden sm:flex">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                              fill="white"
                              stroke="white"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-full">
                          <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
                            Verification Completed Successfully
                          </h5>
                          <p className="text-base leading-relaxed text-body">
                            You will receive an email notification whenever a
                            company arrives for placement but only if your
                            eligibility criteria match with the requirements of
                            the company.
                          </p>
                        </div>
                      </div>
                    )}
                    {/* <!-- Alerts Item --> */}
                    {studentData.isVerified == 'reject' && (
                      <div className="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                        <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171] hidden sm:flex">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                              fill="#ffffff"
                              stroke="#ffffff"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-full">
                          <h5 className="mb-3 font-semibold text-[#B45454]">
                            Your registration form verification has been
                            rejected by the TPO
                          </h5>
                          <ul>
                            <li className="leading-relaxed text-[#CD5D5D]">
                              Please reach out to your departmental TPO for
                              further assistance.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col">
                  <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8">
                    <h4 className="text-xl text-primary font-bold">
                      Personal Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 text-sm md:text-base">
                      <div>
                        <ul className="mt-2 text-gray-700">
                          <li className="flex border-y border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              First Name:
                            </span>
                            <span className="text-gray-700">
                              {studentData.firstName}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Middle Name:
                            </span>
                            <span className="text-gray-700">
                              {' '}
                              {studentData.middleName}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Last Name:
                            </span>
                            <span className="text-gray-700">
                              {studentData.lastName}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Aadhar No:
                            </span>
                            <span className="text-gray-700">
                              {studentData.adharNo}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              PAN No:
                            </span>
                            <span className="text-gray-700">
                              {studentData.PANNumber}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="mt-2 text-gray-700">
                          <li className="flex border-b md:border-y border-slate-300 pb-2 md:py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Date Of Birth:
                            </span>
                            <span className="text-gray-700">
                              {new Date(studentData.dob).toLocaleDateString(
                                'en-IN',
                              )}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Mobile No:
                            </span>
                            <span className="text-gray-700">
                              {' '}
                              {studentData.mobileNo}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Email:
                            </span>
                            <span className="text-gray-700">
                              {studentData.email}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Cast:
                            </span>
                            <span className="text-gray-700">
                              {' '}
                              {studentData.cast}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Date Of Reg.:
                            </span>
                            <span className="text-gray-700">
                              {new Date(
                                studentData.updatedAt,
                              ).toLocaleDateString('en-IN')}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8">
                      <h4 className="text-xl text-primary font-bold">
                        Residential Information
                      </h4>
                      <p className="mt-2 text-gray-700 text-sm sm:text-md">
                        {studentData.address}
                      </p>
                      <ul className="mt-2 text-gray-700 text-sm md:text-base">
                        <li className="flex border-y border-slate-300 py-2">
                          <span className="font-bold w-24 sm:w-30">
                            State Name:
                          </span>
                          <span className="text-gray-700">
                            {studentData.state}
                          </span>
                        </li>
                        <li className="flex border-b border-slate-300 py-2">
                          <span className="font-bold w-24 sm:w-30">
                            City Name:
                          </span>
                          <span className="text-gray-700">
                            {' '}
                            {studentData.city}
                          </span>
                        </li>
                        <li className="flex border-b border-slate-300 py-2">
                          <span className="font-bold w-24 sm:w-30">
                            Pincode No:
                          </span>
                          <span className="text-gray-700">
                            {studentData.pincode}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8 mt-4">
                    <h4 className="text-xl text-primary font-bold">
                      Parents Information
                    </h4>
                    <ul className="mt-2 text-gray-700 text-sm md:text-base">
                      <li className="flex border-y border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-30">
                          Father Name:
                        </span>
                        <span className="text-gray-700">
                          {studentData.fatherName}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-30">
                          Mother Name:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          {studentData.motherName}
                        </span>
                      </li>
                      <li className="flex border-b border-slate-300 py-2">
                        <span className="font-bold w-24 sm:w-30">
                          Parent's No:
                        </span>
                        <span className="text-gray-700">
                          {studentData.parentsMobileNo}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-1 bg-white rounded-lg shadow-xl p-3 sm:p-8 mt-4">
                    <h4 className="text-xl text-primary font-bold">
                      Academic Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 text-sm md:text-base">
                      <div>
                        <ul className="mt-2 text-gray-700">
                          <li className="flex border-y border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Course:
                            </span>
                            <span className="text-gray-700">
                              {studentData.course}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Department:
                            </span>
                            <span className="text-gray-700">
                              {' '}
                              {studentData.department}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Passing Year:
                            </span>
                            <span className="text-gray-700">
                              {studentData.passingYear}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              Enrollment No:
                            </span>
                            <span className="text-gray-700">
                              {studentData.enrollmentNumber}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              SSC Result:
                            </span>
                            <span className="text-gray-700">
                              {studentData.sscPercentage}
                              {'%'}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="mt-2 text-gray-700">
                          <li className="flex border-b md:border-y border-slate-300 pb-2 md:py-2">
                            <span className="font-bold w-24 sm:w-30">
                              HSC Mode:
                            </span>
                            <span className="text-gray-700">
                              {studentData.HSCMode}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              HSC Result:
                            </span>
                            <span className="text-gray-700">
                              {' '}
                              {studentData.hscPercentage}
                              {studentData.hscPercentage > 10 ? '%' : ' CPI'}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">SPI:</span>
                            <span className="text-gray-700">
                              {studentData.spi && Array.isArray(studentData.spi)
                                ? studentData.spi.join(', ')
                                : ''}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">CPI:</span>
                            <span className="text-gray-700">
                              {studentData.cpi}
                            </span>
                          </li>
                          <li className="flex border-b border-slate-300 py-2">
                            <span className="font-bold w-24 sm:w-30">
                              CGPA:
                            </span>
                            <span className="text-gray-700">
                              {studentData.cgpa}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </DefaultLayout>
    </>
  );
};

export default CheckStudent;

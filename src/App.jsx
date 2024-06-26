import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Overview from './pages/Overview/Overview';
import Team from './pages/Team/Team';
import Recruiters from './pages/Recruiters/Recruiters';
import Contact from './pages/Contact/Contact';
import Recruitment_Process from './pages/Recruitment_Process/Recruitment_Process';
import Rules from './pages/Rules_Regulations/Rules';
import Placement_Statistics from './pages/Placement Statistics/Placement_Statistics';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import EmailVerify from './pages/Authentication/EmailVerify';
import ResetPassword from './pages/Authentication/ResetPassword';
import InfoForm from './pages/Form/InfoForm';
import StudentProfile from './pages/StudentProfile';
import EditProfile from './pages/Form/EditProfile';
import VerifyStudent from './pages/VerifyStudent/VerifyStudent';
import CheckStudent from './pages/CheckStudent';
import PostJob from './pages/Form/PostJob';
import RecentCompanies from './pages/RecentCompanies/RecentCompanies';
import CheckCompany from './pages/CheckCompany';
import Companies from './pages/Companies/Companies';
import CompanyInfo from './pages/Companies/CompanyInfo';
import Protected from './pages/Protected';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          // path="/overview"
          index
          element={
            <>
              <PageTitle title="Overview" />
              <Overview />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <PageTitle title="Our Team" />
              <Team />
            </>
          }
        />
        <Route
          path="/recruiters"
          element={
            <>
              <PageTitle title="Our Recruiters" />
              <Recruiters />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageTitle title="Contact Us" />
              <Contact />
            </>
          }
        />
        <Route
          path="/recent-companies"
          element={
            <Protected>
              <PageTitle title="Recent Companies" />
              <RecentCompanies />
            </Protected>
          }
        />
        <Route
          path="/all-companies"
          element={
            <Protected>
              <PageTitle title="Recent Companies" />
              <Companies />
            </Protected>
          }
        />
        <Route
          path="/recruitment-process"
          element={
            <>
              <PageTitle title="Recruitment Process" />
              <Recruitment_Process />
            </>
          }
        />
        <Route
          path="/rules"
          element={
            <>
              <PageTitle title="Recruitment Process" />
              <Rules />
            </>
          }
        />
        <Route
          path="/placement-statistics"
          element={
            <>
              <PageTitle title="Recruitment Process" />
              <Placement_Statistics />
            </>
          }
        />
        {/* <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        /> */}
        <Route
          path="/profiles"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/student-profile"
          element={
            <Protected>
              <PageTitle title="Profile" />
              <StudentProfile />
            </Protected>
          }
        />
        <Route
          path="/edit-student"
          element={
            <Protected>
              <PageTitle title="Profile Edit" />
              <EditProfile />
            </Protected>
          }
        />
        <Route
          path="/verify-student"
          element={
            <Protected>
              <PageTitle title="Verify Student" />
              <VerifyStudent />
            </Protected>
          }
        />
        <Route
          path="/check-student/:isVerified/:id"
          element={
            <Protected>
              <PageTitle title="Check Profile" />
              <CheckStudent />
            </Protected>
          }
        />

        <Route
          path="/check-company/:id"
          element={
            <>
              <Protected>
                <PageTitle title="Compnay Profile" />
                <CheckCompany />
              </Protected>
            </>
          }
        />
        <Route
          path="/company-info/:id"
          element={
            <Protected>
              <PageTitle title="Compnay Profile" />
              <CompanyInfo />
            </Protected>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/forms/registration-form"
          element={
            <Protected>
              <PageTitle title="Registration Form" />
              <InfoForm />
            </Protected>
          }
        />
        <Route
          path="/forms/job-post"
          element={
            <Protected>
              <PageTitle title="Job Form" />
              <PostJob />
            </Protected>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/auth/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/verifyemail/:token"
          element={
            <>
              <PageTitle title="Verify Email" />
              <EmailVerify />
            </>
          }
        />
        <Route
          path="/reset/:id/:token"
          element={
            <>
              <PageTitle title="Reset Password" />
              <ResetPassword />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

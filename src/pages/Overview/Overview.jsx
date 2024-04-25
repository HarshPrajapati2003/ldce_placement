
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import HeroLogo from '../../images/Overview/overview.svg';

const Overview = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Overview" />

      {/* <!-- ====== Overview Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-9">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src={HeroLogo}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl text-primary">
                  Welcome to Training and Placement Cell of LDCE
                </h2>

                <p className="mt-4 text-black">
                  The Training & Placement cell at L. D. College Of Engineering
                  is committed to providing exceptional opportunities for
                  students to kickstart their careers. At L. D. College Of
                  Engineering, we are dedicated to empowering our students with
                  the skills, knowledge, and opportunities they need to succeed
                  in their chosen careers.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen pb-10">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-3xl mt-2 tracking-tight text-primary text-center">
              Our primary responsibilities
            </h2>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-8">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-black">
                    {' '}
                    Facilitating Industrial Training
                  </span>
                  <span className="transition group-open:rotate-180 text-black">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We ensure that our undergraduate (B.Tech.) students undergo
                  mandatory industrial training as a vital part of their
                  curriculum, equipping them with practical skills and industry
                  knowledge.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-black">
                    Inviting Reputable Companies
                  </span>
                  <span className="transition group-open:rotate-180 text-black">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We actively invite renowned companies, institutions, and
                  organizations to our campus for both undergraduate and
                  postgraduate placements, ensuring our students have access to
                  diverse career opportunities.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-black">
                    {' '}
                    Collaborating for Internships and Training Programs
                  </span>
                  <span className="transition group-open:rotate-180 text-black">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  The T&P cell collaborates with leading organizations to
                  establish internship and training programs for our students,
                  enabling them to gain hands-on experience and valuable
                  insights into their chosen fields.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-black">Campus Recruitment</span>
                  <span className="transition group-open:rotate-180 text-black">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Our office maintains strong relationships with numerous
                  companies and industries across the country. Annually, nearly
                  200 esteemed organizations visit our campus to conduct
                  interviews and recruit talented individuals. These
                  organizations span various sectors, including:
                </p>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">Core Engineering Industries</p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">IT & IT Enabled Services</p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">Manufacturing</p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">Consultancy Firms</p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">
                      Investment & Finance Companies
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">Management Organizations</p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-primary">•</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="text-primary">Research & Development Laboratories</p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Overview Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Overview;

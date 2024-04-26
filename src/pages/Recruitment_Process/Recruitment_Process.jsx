import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const Recruitment_Process = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Recruitment Process" />
      {/* <!-- ======  Recruitment_Process section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center dark:text-gray-900 text-primary">
              Steps Of Recruitment Process
            </h2>
            <div className="grid gap-6 mb-16 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 text-primary">
                  1
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Students register for the placement session
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 dark:bg-violet-600 dark:text-gray-50 text-primary">
                  2
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  P&T cell invites companies for internship and Placement
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 dark:bg-violet-600 dark:text-gray-50 text-primary">
                  3
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Interested companies contact P&T cell and submit JNF (Job
                  Notification Offer)
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 text-primary">
                  4
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Announcement of available job offer(s) as per JNF by P&T cell
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 dark:bg-violet-600 dark:text-gray-50 text-primary">
                  5
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Company registration by the interested students
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 dark:bg-violet-600 dark:text-gray-50 text-primary">
                  6
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Eligibility check by P&T cell as per JNF requirements
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 text-primary">
                  7
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Notification of eligible student list
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 dark:bg-violet-600 dark:text-gray-50 text-primary">
                  8
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Selection process by the company
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 rounded-full border-2">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full border-2 dark:bg-violet-600 dark:text-gray-50 text-primary">
                  9
                </div>
                <p className="text-xl sm:text-2xl font-semibold">
                  Announcement of the selection results
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-6 row-gap-10">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full font-extrabold text-primary">
                      1
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">
                    All recipes are written using certain conventions, which
                    define the characteristics of common ingredients. The rules
                    vary from place to place.
                  </p>
                  <p className="text-gray-700">
                    All recipes are written using certain conventions, which
                    define the characteristics of common ingredients. The rules
                    vary from place to place.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 2</p>
                  <p className="text-gray-700">
                    The first mate and his Skipper too will do their very best
                    to make the others comfortable in their tropic island nest.
                    Michael Knight a young loner.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 3</p>
                  <p className="text-gray-700">
                    Tell them I hate them. Is the Space Pope reptilian!? Tell
                    her she looks thin. Hello, little man. I will destroy you!
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 4</p>
                  <p className="text-gray-700">
                    If one examines precultural libertarianism, one is faced
                    with a choice: either accept rationalism or conclude that
                    context is a product.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 4</p>
                  <p className="text-gray-700">
                    If one examines precultural libertarianism, one is faced
                    with a choice: either accept rationalism or conclude that
                    context is a product.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-6 text-gray-600"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-lg font-bold">Success</p>
                  <p className="text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Recruitment_Process Section End ====== --> */}
    </DefaultLayout>
  );

};

export default Recruitment_Process;

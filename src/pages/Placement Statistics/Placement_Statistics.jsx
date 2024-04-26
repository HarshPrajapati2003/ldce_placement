import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import pdf from "../../images/Placement Statistics/pdf.png"

const Placement_Report = [
  {
    title: 'Placement Report 2016',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2016.pdf',
  },
  {
    title: 'Placement Report 2017',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2017.pdf',
  },
  {
    title: 'Placement Report 2018',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2018.pdf',
  },
  {
    title: 'Placement Report 2019',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2019.pdf',
  },
  {
    title: 'Placement Report 2020',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2020.pdf',
  },
  {
    title: 'Placement Report 2021',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2021.pdf',
  },
  {
    title: 'Placement Report 2022',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2022.pdf',
  },
  {
    title: 'Placement Report 2023',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2023.pdf',
  },
  {
    title: 'Placement Report 2024',
    link: 'https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2024.pdf',
  },
];

const Placement_Statistics = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Placement Statistics" />
      {/* <!-- ======  Placement Statistics section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="overflow-x-auto border-x border-t">
          <table className="table-auto w-full text-sm sm:text-lg">
            <thead className="border-b bg-secondary text-black ">
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-bold border-r text-center">
                  No.
                </th>
                <th className="text-left p-4 font-bold border-r text-center">
                  Placement Record
                </th>
                <th className="text-left p-4 font-bold text-center">
                  PDF Link
                </th>
              </tr>
            </thead>
            <tbody>
              {Placement_Report.map((e, idx) => (
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 border-r font-semibold text-center">{idx + 1}</td>
                  <td className="p-4 border-r font-semibold text-center">{e.title}</td>
                  <td className="p-4 text flex justify-center">
                    <a href={e.link}>
                      <img src={pdf} alt="LINK" width={30} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- ====== Placement Statistics Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Placement_Statistics;

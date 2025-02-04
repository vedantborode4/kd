import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="space-y-5 pt-64">
        {/* Search Module */}
        <div className="flex flex-col  w-5/12 place-items-center ">
          <div className="flex flex-row items-center pl-56   py-2">
            {/* <label htmlFor="searchInput" className="mr-2 text-gray-500">Search </label> */}
            <input
              type="text"
              id="searchInput"
              placeholder='Search Module'
              className="p-2 flex-grow border-b-1 w-36 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-500"
              aria-describedby="searchInput-messages"
              size="1"
            />
            
            <div className="flex items-center ml-2">
              <i className="mdi mdi-magnify text-gray-400 text-2xl"></i>
            </div>
          </div>
          <div id="searchInput-messages" role="alert"></div>
        </div>





        {/* Cards Row */}


    {/* <div className="card bg-white rounded-tl-lg rounded-tr-2xl shadow-lg  overflow-hidden flex flex-col justify-between items-center relative transition-all duration-400 ease-in-out ">
      <article className="flex flex-col items-center ">
        <div className="bg-custom-gradient h-32 w-64 rounded-tl-lg rounded-tr-2xl rounded-b  justify-items-center  ">
            <h2 className="text-xl font-semibold text-gray-900 pt-8">Accounts</h2>
        </div>

        <div className="pic mt-4">
          <img
            className="w-full h-auto object-cover"
            src="https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/fees.webp"
            alt="Accounts"
          />
        </div>
      </article>
    </div> */}



        <div className="cards grid grid-cols-2 justify-center mt-5 gap-4">
          {cardData.map((card, index) => (
            <div key={index} className="flex justify-center">
              <Link to={card.link} className="no-underline">
                <div className="card w-28 bg-white rounded-[14px] shadow-[0_20px_30px_-10px_rgba(0,0,0,0.1)] max-w-[200px] min-w-[160px] flex flex-col items-center justify-between p-4 transition-all duration-400 ease-in-out hover:scale-105 m-2">
                  <article className="text-center  ">
                  <div className=" justify-items-center  ">
                    <h2 className="text-xl font-semibold text-gray-900 pt-8">{card.title}</h2>
                  </div>
                  {/* Image wrapper with class .pic */}
                    <div className="pic">
                      <img src={card.imgSrc} alt={card.title} className="w-3/4" />
                    </div>
                  </article>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="footer-class flex justify-center mt-8 bg-gray-800 text-white p-4">
          <span>Powered By</span>
          <a
            href="https://www.edupluscampus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <img
              width="70"
              src="https://www.edupluscampus.com/img/logos/1.png"
              alt="EduPlus Campus Logo"
            />
          </a>
          <div className="flex space-x-3 ml-3">
            <a
              href="https://www.youtube.com/channel/UCisFmSqTOFXMcpb7GlmE_7A/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600"
            >
              <i className="mdi mdi-youtube text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/edutech4?utm_source=Facebook_Page&utm_medium=leads&utm_campaign=edu_Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <i className="mdi mdi-facebook text-2xl"></i>
            </a>
            <a href="https://bit.ly/3l5elKE" target="_blank" rel="noopener noreferrer" className="text-pink-600">
              <i className="mdi mdi-instagram text-2xl"></i>
            </a>
            <a href="https://bit.ly/3l4ZGiu" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              <i className="mdi mdi-twitter text-2xl"></i>
            </a>
            <a href="https://bit.ly/3bBTdsA" target="_blank" rel="noopener noreferrer" className="text-blue-700">
              <i className="mdi mdi-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample card data for mapping
const cardData = [
  { title: 'Academics', imgSrc: 'https://vierp-test.s3.ap-south-1.amazonaws.com/GI-VIERPLOGO/academics.svg', link: '/Academics' },
  { title: 'Accounts', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/fees.webp', link: '/Accounts' },
  { title: 'Admission', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/Admission.svg', link: '/Admission' },
  { title: 'Assignment', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/Assignment.svg', link: '/ASPORTAL' },
  { title: 'Certificate', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/certificate.svg', link: '/document-request' },
  { title: 'Event', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/Event.svg', link: '/Event' },
  { title: 'Examination', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/lms.svg', link: '/Examination' },
  { title: 'Feedback', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/Feedback.svg', link: '/Feedback' },
  { title: 'My Time Table', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/mytimetable.webp', link: '/TimeTable' },
  { title: 'Project Monitoring', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/lms.svg', link: '/project-monitoring' },
  { title: 'Quiz', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/quiz.svg', link: '/quiz' },
  { title: 'Subject Registration', imgSrc: 'https://erpstudentmobileapp.s3.ap-south-1.amazonaws.com/Profileicon/Subject_registration.svg', link: '/Registration' },
];

export default Dashboard;

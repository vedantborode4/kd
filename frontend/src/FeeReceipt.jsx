import React from 'react'
import fee1 from "/Fee1.png"
import fee2 from "/Fee2.png"
import AppBar from './AppBar'


function FeeReceipt() {
  return (
    <div>
      {/* <AppBar/>  */}
      <div className="pt-48">
      <img src={fee1} alt="" />
      <img src={fee2} alt="" />
      <div className="flex justify-center pb-20">
      <button className='rounded px-2 bg-blue-800 text-white text-center w-16 p-1 font-semibold text-sm'>
        PRINT
      </button>
      </div>
      </div>
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
  )
}

export default FeeReceipt
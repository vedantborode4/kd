import React from 'react';
import AppBar from './AppBar';

function Card() {
  return (
    <div className="">

      {/* <AppBar/> */}

      <div className="max-w-lg mx-auto mt-6 p-8  pt-56">
      {/* Card */}
      <div className="bg-white shadow-lg border-1 border-gray-900 rounded-lg p-4">
        {/* Header Section */}
        <div className="flex">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo_new.png"
              alt="Institute Logo"
              className="w-20 h-24 mt-2"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center">
            <p className="font-bold text-xs mt-2">Bansilal Ramnath Agarwal Charitable Trust's</p>
            <h2 className="font-bold text-lg mt-1">Vishwakarma Institute of Information Technology, Pune</h2>
            <p className="text-sm text-gray-700 mt-2">Survey No. 3/4, Kondhwa (Budruk), Pune – 411048</p>
            <a
              href="https://www.viit.ac.in"
              className="text-blue-500 text-xs mt-2 block"
            >
              Website: www.viit.ac.in
            </a>
          </div>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        {/* Student Profile Section */}
        <div className="text-center">
          <img
            src="https://vierp.s3.ap-south-1.amazonaws.com/cloud/studentprofile/icard/photo/21911174photo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Date=20250204T054159Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Credential=AKIASPWL33DP5Q6YLL5I%2F20250204%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Signature=56561c2699aa233fa7943c2ba54f67ed32892951f401332f9cd297595e4fc7d7"
            alt="Student Photo"
            className="w-32 h-40 object-cover mx-auto"
          />
          <h5 className="mt-3 text-sm font-semibold">Reg No : 21911174</h5>
          <h5 className="mt-2 text-lg font-bold">KORGAONKAR KIRAN DILIP</h5>
          <p className="mt-2 text-lg font-semibold">MASTER OF TECHNOLOGY</p>
        </div>

        {/* Barcode Section */}
        <div className="flex justify-center mt-4 pb-4">
          <svg
            className="w-44 h-18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 178 72"
          >
            <rect x="0" y="0" width="178" height="72" style={{ fill: '#ffffff' }} />
            <g transform="translate(10, 10)" style={{ fill: '#000000' }}>
              <rect x="0" y="0" width="4" height="30" />
              <rect x="6" y="0" width="2" height="30" />
              <rect x="12" y="0" width="6" height="30" />
              <rect x="22" y="0" width="4" height="30" />
              <rect x="28" y="0" width="6" height="30" />
              <rect x="38" y="0" width="2" height="30" />
              <rect x="44" y="0" width="8" height="30" />
              <rect x="54" y="0" width="4" height="30" />
              <rect x="60" y="0" width="4" height="30" />
              <rect x="66" y="0" width="4" height="30" />
              <rect x="76" y="0" width="2" height="30" />
              <rect x="82" y="0" width="2" height="30" />
              <rect x="88" y="0" width="2" height="30" />
              <rect x="98" y="0" width="4" height="30" />
              <rect x="106" y="0" width="2" height="30" />
              <rect x="110" y="0" width="4" height="30" />
              <rect x="118" y="0" width="2" height="30" />
              <rect x="122" y="0" width="6" height="30" />
              <rect x="132" y="0" width="4" height="30" />
              <rect x="142" y="0" width="6" height="30" />
              <rect x="150" y="0" width="2" height="30" />
              <rect x="154" y="0" width="4" height="30" />
              <text style={{ font: '20px monospace' }} textAnchor="middle" x="79" y="52">21911174</text>
            </g>
          </svg>
        </div>
      </div>
      </div>
      <div className="footer-class flex justify-center mt-8 bg-gray-800 text-white p-4 pt-16">
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

  );
}

export default Card;

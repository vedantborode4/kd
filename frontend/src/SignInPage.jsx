import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* BillDesk Smart Payment Solution iframe */}
      <div className="fixed top-0 left-0 w-full h-full z-50 hidden" id="bdCheckout">
        <iframe
          title="BillDesk Smart Payment Solution"
          id="bdsps"
          name="bdsps"
          className="w-full h-full"
          allow="payment"
          src="https://pgi.billdesk.com/payments-checkout-widget/src/init.html"
          frameBorder="0"
        />
        <div className="spin-loader-mask">
          <div className="spin-loader">
            <div></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-grow flex items-center justify-center py-5">
        <div className="max-w-lg w-full space-y-6">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <img
                src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo_new.png"
                alt="Logo"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Sign-In Heading */}
          <div className="flex justify-center text-2xl font-bold text-center text-violet-900 ">
            <span>Student Sign</span>
            <span className="text-yellow-500">-In</span>
          </div>

          {/* Username Input */}
          <div className="flex justify-center">
            <div className="w-full mx-8 space-y-4 ">
              <div className="relative">
                <label htmlFor="username" className="absolute  left-2 text-m text-gray-500">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <hr className="border border-gray-300"/>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="absolute  left-2 text-m text-gray-500">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <hr className="border border-gray-300"/>
              </div>

              {/* Sign-In Button */}
              <div className="flex justify-center mt-4">
                <button className=" py-2 px-6 bg-blue-500 text-white font-bold text-sm rounded-full hover:bg-blue-700">
                  SIGN IN
                </button>
              </div>
            </div>
          </div>

          {/* Help & Forgot Password Links */}
          <div className="flex justify-between text-sm">
            <a href="#" className="text-blue-500 hover:underline px-6">
              Help
            </a>
            <a href="#" className="text-blue-500 hover:underline px-6">
              Forgot Password?
            </a>
          </div>

          {/* Banner Image */}
          <div className="flex justify-center">
            <div className="relative pb-[46.4924%] w-full">
              <img
                src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/edupluscampus_banner.jpg"
                alt="Banner"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </div>


          {/* App Download Links */}
          <div className="flex justify-center mt-5 space-x-5">
            <a
              href="https://play.google.com/store/apps/details?id=com.edupluscampus.erp_student"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://learner.vierp.in/assets/android.80197a1a.jpeg"
                alt="Download on Google Play"
                className="h-9"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/myvi/id6447692110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://learner.vierp.in/assets/iphone.11b01ecc.jpeg"
                alt="Download on App Store"
                className="h-9"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 py-4 text-center text-white">
        <div className="flex justify-center items-center">
          <span>Powered By </span>
          <a
            href="https://www.edupluscampus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-white"
          >
            <img
              src="https://www.edupluscampus.com/img/logos/1.png"
              alt="EduPlus Campus"
              width="70"
            />
          </a>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.youtube.com/channel/UCisFmSqTOFXMcpb7GlmE_7A/playlists"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-youtube bg-white px-1 rounded-2xl text-red-500 text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com/edutech4?utm_source=Facebook_Page&utm_medium=leads&utm_campaign=edu_Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-facebook bg-white px-1 rounded-2xl  text-blue-600 text-2xl"></i>
          </a>
          <a
            href="https://bit.ly/3l5elKE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-instagram bg-white px-1 rounded-2xl text-pink-500 text-2xl"></i>
          </a>
          <a
            href="https://bit.ly/3l4ZGiu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-twitter bg-white px-1 rounded-2xl text-blue-600 text-2xl"></i>
          </a>
          <a
            href="https://bit.ly/3bBTdsA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-linkedin bg-white px-1 rounded-2xl text-blue-600 text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;

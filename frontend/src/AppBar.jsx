import React, { useState, useEffect, useRef } from 'react';
import UserProfileCard from './UserProfileCard'; // Import the user profile card component
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import kd1 from "../public/kd1.jpg"
import AB from "../public/AB.jpg"

const AppBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown menu to detect clicks outside

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Main App Bar */}
      <header className="flex items-center fixed top-0 left-0 right-0 z-10 bg-gray-200 px-3 py-1">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="h-12 w-10"
            src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo.png"
            alt="Vishwakarma Institute Logo"
          />
        </Link>
        <div className="flex items-center">
          {/* Menu Button */}
          <button className="flex items-center justify-center p-2 px-4 rounded-full bg-transparent">
            <i className="mdi mdi-menu text-gray-900 text-2xl"></i>
          </button>
        </div>

        {/* Toolbar Title */}
        <div className="flex-grow md:flex justify-center text-xl font-semibold text-gray-900 hidden">
          Vishwakarma Institute of Information Technology, Pune
        </div>

        {/* Speed and Network Status */}
        <div className="flex pl-16 items-center text-sm text-gray-600">
          <div className="flex font-bold items-center mr-4 text-green-600">
            <span>5G</span>
            <span className="ml-2">⚡️10.2 Mbps</span>
          </div>
        </div>

        {/* Avatar and Menu Button */}
        <div className="flex items-center pl-7">
          {/* Avatar Button */}
          <button
            className="flex items-center justify-center p-2 rounded-full bg-transparent"
            onClick={toggleDropdown}
          >
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex justify-center items-center font-semibold">
              AB
            </div>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-12 w-60 z-20">
              <UserProfileCard />
            </div>
          )}
        </div>
      </header>

      {/* Second App Bar */}
      <header className="flex flex-col fixed left-0 bg-white right-0 justify-between shadow-2xl pt-4 pb-2 px-4 mt-12">
        {/* Avatar Button */}
        <div className='flex flex-wrap justify-items-start'>
          <div className="flex flex-row">
            <button className="flex items-center justify-center py-2 rounded-full bg-transparent">
              <div className="w-10 h-10 rounded-full text-white flex justify-center items-center font-semibold">
                <img src={AB} alt="" className='w-10 h-10 rounded-full'/>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center p-2 rounded-full bg-transparent">
            <span className='font-bold text-gray-500 text-medium-emphasis'>AVADHUT BARASKAR</span>
          </div>
          {/* Status Chip */}
          <div className="flex">
            <span className="inline-flex items-center px-4 py-2 h-8 mt-3 rounded-full bg-green-100 text-green-600 text-sm">
              <i className='mdi-checkbox-blank-circle mdi pr-2 '></i>
              Active
            </span>
          </div>
        </div>

        <div>
          <div className="v-col-sm-3 v-col-12 mt-3 font-weight-regular text-medium-emphasis">
            <span className="font-bold text-gray-500">Registration No.22311568</span>
          </div>
          <div className="v-col-sm-3 v-col-12 float-center mt-3">
            <span className="font-bold text-gray-500">BTech-Computer Engineering</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AppBar;

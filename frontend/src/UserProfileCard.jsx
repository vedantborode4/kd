import React from 'react';
import { Link } from 'react-router-dom';
import kd1 from "../public/kd1.jpg"

function UserProfileCard() {
  return (
    <div className=" bg-white shadow-lg rounded-lg p-4   fixed top-[50px] left-[102.5px] max-h-[654px] max-w-[376px] min-w-[64px] origin-top-right">
      {/* Loader Placeholder */}
      {/* <div className="relative mb-4">
        <div className="w-full h-1.5 bg-gray-200"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-1/3 bg-gray-400 animate-pulse"></div>
        </div>
      </div> */}

      {/* User Information Section */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={kd1}
            alt="Profile Picture"
          />
        </div>
        <div className="ml-4">
          <h5 className="text-lg font-semibold">KIRAN KORGAONKAR</h5>
          <p className="text-xs text-gray-500">kiran.21911174@viit.ac.in</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2 border-gray-300" />

      {/* Links Section */}
      <div className="space-y-3">
        <Link to="/profile" className="flex h-8  items-center text-m  hover:underline">
          <img className="w-5 h-5" src="https://learner.vierp.in/assets/profile.29452382.svg" alt="Profile Icon" />
          <span className="ml-3">User Profile</span>
        </Link>

        <Link to="/ChangePwd" className="flex h-8  items-center text-m  hover:underline">
          <img className="w-5 h-5" src="https://learner.vierp.in/assets/password.dd1ee26f.svg" alt="Change Password Icon" />
          <span className="ml-3">Change Password</span>
        </Link>

        <Link to="/Card" className="flex h-8  items-center text-m  hover:underline">
          <img className="w-5 h-5" src="https://learner.vierp.in/assets/card.058380c6.svg" alt="ID Card Icon" />
          <span className="ml-3">Virtual ID Card</span>
        </Link>

        <Link to="/" className="flex h-8  items-center text-m  hover:underline">
          <img className="w-5 h-5" src="https://learner.vierp.in/assets/logout.179b37db.svg" alt="Log Out Icon" />
          <span className="ml-3">Log Out</span>
        </Link>
      </div>
    </div>
  );
}

export default UserProfileCard;

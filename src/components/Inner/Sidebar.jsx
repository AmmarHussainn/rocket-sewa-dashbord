// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      {/* Sidebar content goes here */}
      <div className="p-4 text-2xl font-bold">MCDM</div>
      <ul className="space-y-2 mt-6">
        <a href="/dashboard"><li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li></a>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Analytics</li>

        {/* Use the dropdown code for the "Settings" menu item */}
        <div className="relative group">
          <div
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={handleDropdownToggle}
          >
            Settings
          </div>
          <div
            className={`absolute ${isDropdownOpen ? '' : 'hidden'} space-y-2 mt-2 bg-gray-800 border-l border-t border-r border-gray-700 right-0`}
          >
            <a href="/personalInfo" className="block p-2 hover:bg-gray-700">
              Personal Information
            </a>
            <a href="/changePass" className="block p-2 hover:bg-gray-700">
              Change Passwords
            </a>
            <a href="/manageAcc" className="block p-2 hover:bg-gray-700">
              Manage Account Settings
            </a>
          </div>
        </div>

        <li className="p-4 hover:bg-gray-700 cursor-pointer">Sign Out</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

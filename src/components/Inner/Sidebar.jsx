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
      <div className="p-4 text-2xl font-bold">User Dashboard</div>
      <ul className="space-y-2 mt-6">
        <a href="/dashboard"><li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li></a>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Analytics</li>

        <a href="/loginUser"><li className="p-4 hover:bg-gray-700 cursor-pointer">Sign Out</li></a>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

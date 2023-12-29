// src/components/Sidebar.js
import React, { useState } from 'react';

const SuperAdminSidebar = () => {

  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      {/* SuperAdminSidebar content goes here */}
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <ul className="space-y-2 mt-6">
        <a href="/dashboard"><li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li></a>
        <a href="/request"><li className="p-4 hover:bg-gray-700 cursor-pointer">Requests</li></a>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Manage User</li>
        <a href="/reviews"><li className="p-4 hover:bg-gray-700 cursor-pointer">Reviews</li></a>
        
        {/* Use the dropdown code for the "Settings" menu item */}
        
        <a href="/loginUser"><li className="p-4 hover:bg-gray-700 cursor-pointer">Sign Out</li></a>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default SuperAdminSidebar;

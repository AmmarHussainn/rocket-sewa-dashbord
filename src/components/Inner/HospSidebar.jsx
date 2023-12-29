// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {

  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      {/* Sidebar content goes here */}
      <div className="p-4 text-2xl font-bold">Hospital Dashboard</div>
      <ul className="space-y-2 mt-6">
        <a href="/hospdashboard"><li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li></a>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Analytics</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">See Users</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">See Message History</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Add Products</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Add Services</li>
        <a href="/loginUser"><li className="p-4 hover:bg-gray-700 cursor-pointer">Sign Out</li></a>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

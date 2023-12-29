// ChangePasswordPage.js

import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import your Sidebar component

const ChangePass = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Add logic to handle password change (e.g., make an API call to update the password)
    console.log('Password change logic here:', passwordData);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow flex items-center justify-center p-6 bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Change Password</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;

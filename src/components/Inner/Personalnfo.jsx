// UserProfilePage.js

import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios using: npm install axios
import Sidebar from "../Inner/Sidebar"

const PersonalInfo = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    accountNumber: '123456789',
    additionalDetails: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async () => {
  //   try {
  //     // Make a request to your backend to update user data
  //     const response = await axios.put('/api/user', userData);
  //     console.log(response.data); // Assuming your backend responds with updated user data
  //   } catch (error) {
  //     console.error('Error updating user data:', error);
  //   }
  // };

  return (
    <div className="flex">
      <Sidebar/>
      <div className="container ml-4 mt-8 p-6 bg-gray-100 rounded-lg shadow-md md:w-full w-full">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={userData.accountNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Additional Details</label>
          <textarea
            name="additionalDetails"
            value={userData.additionalDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          // onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Save Changes
        </button>
      </form>
    </div>
    </div>
  );
};

export default PersonalInfo;

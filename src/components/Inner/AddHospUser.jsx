// AddUser.js

import React, { useState } from 'react';

const AddUser = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the user details to the backend
    console.log('User Details Submitted:', { email, phone, password });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Phone Number:</label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;

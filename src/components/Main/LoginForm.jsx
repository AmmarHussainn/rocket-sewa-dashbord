// src/components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log('Login submitted:', loginData);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-2 text-lg text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label className="block mb-2 text-lg text-gray-600" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
    <Link to="/userDash" >
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
    </Link>
      </form>
    </div>
  );
};

export default LoginForm;

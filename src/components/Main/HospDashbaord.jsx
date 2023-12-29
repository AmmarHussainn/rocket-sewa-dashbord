import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import HospSidebar from '../Inner/HospSidebar';

const Dashboard = () => {
  const [interactions, setInteractions] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [daysLeft, setDaysLeft] = useState(15);
  const [selectedStars, setSelectedStars] = useState(0);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Simulate fetching data from backend
  useEffect(() => {
    // Fetch data and update state
    // Example: fetch('/api/dashboard').then(response => response.json()).then(data => setInteractions(data.interactions));
  }, []);


  const handleAddUser = () => {
    setTotalUsers((prevTotalUsers) => prevTotalUsers + 1);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleStarClick = (stars) => {
    setSelectedStars(stars);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitReview = () => {
    // Add logic to send selectedStars and message to the backend
    console.log('Review Submitted with Stars:', selectedStars);
    console.log('Message Submitted:', message);
    // Add API call or other logic to send data to the backend
    closeForm(); // Close the form after submission
  };

  useEffect(() => {
    // Open the form when the component mounts
    openForm();
  }, []);

  return (
    <div>
      <div className="flex">
        <HospSidebar />
        <div className="container mx-5 mt-8">
          <h1 className="text-2xl font-bold my-4">Hospital Dashboard</h1>
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-2">Interactions</h2>
              <p className="text-3xl font-bold text-blue-500">{interactions}</p>
            </div>
            <div className="border p-4 rounded-md shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-2">Subscriptions</h2>
              <p className="text-3xl font-bold text-yellow-500">{subscriptions}</p>
              <p className="text-sm text-gray-600 mt-2">Days Left: {daysLeft}</p>
              <div className="flex justify-between mt-4">
                <a href="/renewsub">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Renew Subscription
                </button>
                </a>
                <a href='/cancelSub'>
                <button
                  className="bg-red-500 text-white mx-2 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Cancel Subscription
                </button>
                </a>
              </div>
            </div>
            <div className="border p-4 rounded-md shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-2">Total Users</h2>
              <p className="text-3xl font-bold text-green-500">{totalUsers}</p>
              <Link to="/addHospUser">
                <button
                  onClick={handleAddUser}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
                >
                  Add User
                </button>
              </Link>
            </div>
          </div>

          {/* Review Form */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Review Box</h2>
                  <button onClick={closeForm} className="text-gray-600">
                    &times;
                  </button>
                </div>
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleStarClick(star)}
                      className={`text-3xl ${
                        star <= selectedStars ? 'text-yellow-500' : 'text-gray-200'
                      }`}
                    >
                      <AiFillStar />
                    </button>
                  ))}
                </div>
                {/* Message Input */}
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

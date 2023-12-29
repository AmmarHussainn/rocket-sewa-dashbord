import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [interactions, setInteractions] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);
  const [daysLeft, setDaysLeft] = useState(15); // Assuming 15 days left in the subscription

  // Simulate fetching data from backend
  useEffect(() => {
    // Fetch data and update state
    // Example: fetch('/api/dashboard').then(response => response.json()).then(data => setInteractions(data.interactions));
  }, []);



  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-5 mt-8">
        <h1 className="text-2xl font-bold my-4">User Dashboard</h1>
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Interactions Card */}
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Interactions</h2>
            <p className="text-3xl font-bold text-blue-500">{interactions}</p>
          </div>

          {/* Subscriptions Card */}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

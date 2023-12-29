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

  const handleRenewSubscription = () => {
    // Add logic for renewing the subscription
    console.log('Subscription renewed!');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-5 mt-8">
        <h1 className="text-2xl font-bold my-4">Dashboard</h1>
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Interactions Card */}
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Interactions</h2>
            <p className="text-3xl font-bold text-blue-500">{interactions}</p>
          </div>

          {/* Reviews Card */}
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <p className="text-3xl font-bold text-green-500">{reviews}</p>
          </div>

          {/* Subscriptions Card */}
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Subscriptions</h2>
            <p className="text-3xl font-bold text-yellow-500">{subscriptions}</p>
            <p className="text-sm text-gray-600 mt-2">Days Left: {daysLeft}</p>
            <button
              onClick={handleRenewSubscription}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              <a href="/renewsub">
              Renew Subscription
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

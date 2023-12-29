import React, { useState, useEffect } from 'react';

import SuperAdminSidebar from './SuperAdminSideBar';

const   SuperAdminDashboard = () => {
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
     <SuperAdminSidebar />
      <div className="container mx-5 mt-8">
        <h1 className="text-2xl font-bold my-4">Admin Dashboard</h1>
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Total Number of Users</h2>
            <p className="text-3xl font-bold text-blue-500">{interactions}</p>
          </div>
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Hospital Users</h2>
            <p className="text-3xl font-bold text-blue-500">{interactions}</p>
          </div>
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Indivisual Users</h2>
            <p className="text-3xl font-bold text-blue-500">{interactions}</p>
          </div>

          {/* Reviews Card */}
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <p className="text-3xl font-bold text-green-500">{reviews}</p>
          </div>

          {/* Subscriptions Card */}
         
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;

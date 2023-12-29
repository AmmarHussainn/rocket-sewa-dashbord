// RenewSubscriptionPage.js

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const RenewSub = () => {
  const [subscriptionDetails, setSubscriptionDetails] = useState({
    currentPlan: 'Basic',
    expirationDate: '2023-12-31', // Example expiration date
  });

  const handleRenewSubscription = () => {
    // Add logic to renew the subscription (e.g., make an API call to update the subscription status)
    console.log('Subscription renewed!');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-5 mt-8">
        <h1 className="text-2xl font-bold my-4">Renew Subscription</h1>

        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subscription Details</h2>
          <p className="text-lg mb-2">Current Plan: {subscriptionDetails.currentPlan}</p>
          <p className="text-lg mb-4">Expiration Date: {subscriptionDetails.expirationDate}</p>

          <p className="text-sm text-gray-600 mb-4">
            Please choose a plan and proceed with the renewal process.
          </p>

          {/* Renew Subscription Form */}
          {/* Add your subscription plan options and form elements here */}
          {/* Example: */}
          <form>
            <label className="block text-gray-700 mb-2">Choose a Plan:</label>
            {/* Add your plan options as radio buttons or a dropdown */}
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => console.log('Selected plan:', e.target.value)}
            >
              <option value="Basic">Basic</option>
              <option value="Pro">Pro</option>
              <option value="Premium">Premium</option>
            </select>

            <button
              type="button"
              onClick={handleRenewSubscription}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Renew Subscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RenewSub;

import React, { useState } from 'react';
import axios from 'axios';

const CancelSub = () => {
  const [subscriptionId, setSubscriptionId] = useState('');
  const [cancellationReason, setCancellationReason] = useState('');
  const [isCancelled, setIsCancelled] = useState(false);

  const handleCancellation = () => {
    // Perform validation if needed

    // Send cancellation request to the backend
    axios.post('/api/cancel-subscription', {
      subscriptionId,
      cancellationReason,
    })
    .then(response => {
      console.log('Subscription cancelled successfully:', response.data);
      setIsCancelled(true);
    })
    .catch(error => {
      console.error('Error cancelling subscription:', error);
      // Handle error, show a message to the user, etc.
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cancel Subscription</h2>
      {isCancelled ? (
        <div className="text-green-600 font-bold mb-4">
          Your subscription has been successfully cancelled.
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subscriptionId">
              Subscription ID
            </label>
            <input
              type="text"
              id="subscriptionId"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your subscription ID"
              value={subscriptionId}
              onChange={(e) => setSubscriptionId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cancellationReason">
              Reason for Cancellation
            </label>
            <textarea
              id="cancellationReason"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the reason for cancellation"
              value={cancellationReason}
              onChange={(e) => setCancellationReason(e.target.value)}
            />
          </div>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCancellation}
          >
            Cancel Subscription
          </button>
        </div>
      )}
    </div>
  );
};

export default CancelSub;

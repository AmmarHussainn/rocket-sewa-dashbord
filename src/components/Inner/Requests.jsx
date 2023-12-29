import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Requests = () => {
  const [subscriptionRequests, setSubscriptionRequests] = useState([]);

  useEffect(() => {
    // Fetch subscription requests from the backend
    axios.get('/api/subscription-requests')
      .then(response => setSubscriptionRequests(response.data))
      .catch(error => console.error('Error fetching subscription requests:', error));
  }, []);

  const handleApprove = (requestId) => {
    // Send approval request to the backend
    axios.post('/api/approve-subscription-request', { requestId })
      .then(response => {
        console.log('Subscription request approved successfully:', response.data);
        // Update the local state or refetch the data if needed
      })
      .catch(error => console.error('Error approving subscription request:', error));
  };

  const handleReject = (requestId) => {
    // Send rejection request to the backend
    axios.post('/api/reject-subscription-request', { requestId })
      .then(response => {
        console.log('Subscription request rejected successfully:', response.data);
        // Update the local state or refetch the data if needed
      })
      .catch(error => console.error('Error rejecting subscription request:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Subscription Requests</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Subscription Plan</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionRequests.map(request => (
            <tr key={request.id}>
              <td className="py-2 px-4 border-b">{request.user}</td>
              <td className="py-2 px-4 border-b">{request.subscriptionPlan}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;

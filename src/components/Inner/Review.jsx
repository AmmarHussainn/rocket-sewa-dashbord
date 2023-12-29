import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewPage = () => {
  const [individualReviews, setIndividualReviews] = useState([]);
  const [hospitalReviews, setHospitalReviews] = useState([]);

  useEffect(() => {
    // Fetch individual user reviews from the backend
    axios.get('/api/individual-reviews')
      .then(response => setIndividualReviews(response.data))
      .catch(error => console.error('Error fetching individual reviews:', error));

    // Fetch hospital user reviews from the backend
    axios.get('/api/hospital-reviews')
      .then(response => setHospitalReviews(response.data))
      .catch(error => console.error('Error fetching hospital reviews:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Individual User Reviews</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Review</th>
              <th className="py-2 px-4 border-b">Stars</th>
            </tr>
          </thead>
          <tbody>
            {individualReviews.map(review => (
              <tr key={review.id}>
                <td className="py-2 px-4 border-b">{review.user}</td>
                <td className="py-2 px-4 border-b">{review.review}</td>
                <td className="py-2 px-4 border-b">{review.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div>
        <h2 className="text-2xl font-bold mb-4">Hospital User Reviews</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Hospital</th>
              <th className="py-2 px-4 border-b">Review</th>
              <th className="py-2 px-4 border-b">Stars</th>
            </tr>
          </thead>
          <tbody>
            {hospitalReviews.map(review => (
              <tr key={review.id}>
                <td className="py-2 px-4 border-b">{review.hospital}</td>
                <td className="py-2 px-4 border-b">{review.review}</td>
                <td className="py-2 px-4 border-b">{review.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewPage;

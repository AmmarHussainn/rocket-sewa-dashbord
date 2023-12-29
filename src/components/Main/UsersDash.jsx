import React from 'react'
import Dashboard from '../Inner/Dashboard';
import { useState , useEffect  } from 'react';
const UsersDash = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    // Open the form when the component mounts
    openForm();
  }, []);

  return (
    <div className='flex'>
      {/* Your Dashboard content */}
      <Dashboard />

      {/* Popup Input Form */}
      {showForm && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-semibold'>Alert Box</h2>
              <button onClick={closeForm} className='text-gray-600'>
                &times;
              </button>
            </div>
            {/* Your input form content */}
            <form>
              {/* Add your form fields here */}
              <div className='mb-4'>
                <label htmlFor='inputField' className='block text-gray-700 text-sm font-bold mb-2'>
                  Input Field
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-gray-300 p-2 w-full'
                />
              </div>
              <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersDash;
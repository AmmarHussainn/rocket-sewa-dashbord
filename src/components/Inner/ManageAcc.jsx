// ManageAccountSettingsPage.js

import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import your Sidebar component

const ManageAcc = () => {
  // State for managing account information
  const [accountInfo, setAccountInfo] = useState({
    companyName: 'Your Company Name',
    contactEmail: 'contact@example.com',
    timeZone: 'UTC',
  });

  // State for managing security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuthentication: false,
    changePasswordOnLogin: false,
  });

  // State for managing notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleAccountInfoChange = (e) => {
    setAccountInfo({
      ...accountInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSecuritySettingsChange = (e) => {
    setSecuritySettings({
      ...securitySettings,
      [e.target.name]: e.target.checked,
    });
  };

  const handleNotificationSettingsChange = (e) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = () => {
    // Add logic to save changes (e.g., make API calls to update settings)
    console.log('Settings saved:', { accountInfo, securitySettings, notificationSettings });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow flex items-center justify-center p-6 bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Manage Account Settings</h1>

          {/* Account Information Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={accountInfo.companyName}
                  onChange={handleAccountInfoChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={accountInfo.contactEmail}
                  onChange={handleAccountInfoChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Time Zone</label>
                <select
                  name="timeZone"
                  value={accountInfo.timeZone}
                  onChange={handleAccountInfoChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST</option>
                  {/* Add more time zone options as needed */}
                </select>
              </div>
            </div>
          </section>

          {/* Security Settings Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="twoFactorAuthentication"
                  checked={securitySettings.twoFactorAuthentication}
                  onChange={handleSecuritySettingsChange}
                  className="mr-2"
                />
                <label className="text-gray-700">Enable Two-Factor Authentication</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="changePasswordOnLogin"
                  checked={securitySettings.changePasswordOnLogin}
                  onChange={handleSecuritySettingsChange}
                  className="mr-2"
                />
                <label className="text-gray-700">Require Password Change on Login</label>
              </div>
            </div>
          </section>

          {/* Notification Settings Section */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onChange={handleNotificationSettingsChange}
                  className="mr-2"
                />
                <label className="text-gray-700">Receive Email Notifications</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="pushNotifications"
                  checked={notificationSettings.pushNotifications}
                  onChange={handleNotificationSettingsChange}
                  className="mr-2"
                />
                <label className="text-gray-700">Receive Push Notifications</label>
              </div>
            </div>
          </section>

          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAcc;

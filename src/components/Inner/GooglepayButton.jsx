// import React, { useEffect } from 'react';

// const GooglePayButton = ({ onClick }) => {
//   let google;

//   useEffect(() => {
//     const googlePayClient = () => {
//       google = new window.google.payments.api.PaymentsClient({
//         environment: 'TEST', // Change to 'PRODUCTION' for production
//       });

//       const button = google.createButton({
//         onClick,
//       });

//       document.getElementById('google-pay-button-container').appendChild(button);
//     };

//     googlePayClient();
//   }, [googlePayClient]);  // Add googlePayClient to the dependency array

//   return <div id="google-pay-button-container"></div>;
// };

// export default GooglePayButton;

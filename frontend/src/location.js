// // LocationChecker.js
// import React, { useState, useEffect } from 'react';
// import App from './App';

// const LocationChecker = () => {
//   const [location, setLocation] = useState(null);
//   const [serviceAvailable, setServiceAvailable] = useState(false);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });

//           const isServiceAvailable = checkServiceAvailability(position.coords.latitude, position.coords.longitude);
//           setServiceAvailable(isServiceAvailable);

//           if (!isServiceAvailable) {
//             alert('Service is not available at your location.');
//           }
//         },
//         (error) => {
//           console.error('Error getting location:', error.message);
//         },
//         { enableHighAccuracy: true }
//       );
//     } else {
//       console.error('Geolocation is not supported by your browser');
//     }
//   }, []);

//   const checkServiceAvailability = (userLatitude, userLongitude) => {
//     // Replace cities with your actual list of cities
//     const cities = [
      
      
//       { name: 'Indore', latitude: 22.7196 , longitude: 75.8577 },
//       { name: 'Dewas', latitude: 22.9676, longitude: 76.0534 },
//       { name: 'Ujjain', latitude: 23.1765, longitude: 75.7885 },
//       { name: 'Jabalpur', latitude: 75.7885, longitude: 79.9339 },
      
    
//       // Add more cities as needed
//     ];

//     for (const city of cities) {
//       const distance = calculateDistance(userLatitude, userLongitude, city.latitude, city.longitude);

//       // Adjust the threshold distance based on your requirements
//       const thresholdDistance = 50; // kilometers

//       if (distance <= thresholdDistance) {
//         // User is within the serviceable area (city)
//         return true;
//       }
//     }

//     // User is not in any of the serviceable cities
//     return false;
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Earth radius in kilometers
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c;
//     return distance;
//   };

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   return (
//     <div>
//       {location ? (
        
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default LocationChecker;

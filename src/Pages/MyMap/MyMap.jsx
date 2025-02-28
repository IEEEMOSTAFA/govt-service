// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const MyMap = () => {
//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
//       <TileLayer 
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup> A sample marker in London </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MyMap;











import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../Shared/Navbar/Navbar";

const MyMap = () => {
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setShowMap(true);
      },
      (error) => {
        alert("Unable to retrieve your location.");
        console.error(error);
      }
    );
  };

  return (
    <div>
        <Navbar></Navbar>

        <div className="flex flex-col items-center gap-4 p-4">
      <button
        onClick={handleShowMap}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        {showMap ? "Refresh Location" : "Show My Location"}
      </button>

      {showMap && location && (
        <div className="w-full max-w-2xl h-96">
          <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[location.lat, location.lng]}>
              <Popup> You are here! 📍 </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default MyMap;

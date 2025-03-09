import  { useState } from "react";
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
      <Navbar />

      <div className="flex flex-col items-center gap-4 p-4">
        <button
          onClick={handleShowMap}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          {showMap ? "Refresh Location" : "Show My Location"}
        </button>

        {showMap && location && (
          <div className="w-full max-w-2xl">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=15&size=600x400&markers=color:red%7C${location.lat},${location.lng}&key=YOUR_GOOGLE_MAPS_API_KEY`}
              alt="Map showing your location"
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMap;

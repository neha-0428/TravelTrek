import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchHotelParameters } from "../../api/fetchHotelParameters";
import { fetchHotels } from "../../api/fetchHotels";

export default function HotelTab() {
  const apiKey = import.meta.env.VITE_CITY_API_KEY;
  const navigate = useNavigate();
  const location = useLocation();

  // Extracting initial states from location
  const {
    destination: initialDestination,
    fromDate: initialFromDate,
    toDate: initialToDate,
  } = location.state || {};

  const [hotels, setHotels] = useState([]);
  const [hotelId, setHotelId] = useState(null); 
  const [entityId, setEntityId] = useState("");
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState(initialDestination || "");
  const [fromDate, setFromDate] = useState(initialFromDate || "");
  const [toDate, setToDate] = useState(initialToDate || "");

  // Effect to fetch hotel parameters when the destination changes
  useEffect(() => {
    const fetchParams = async () => {
      const entity = await fetchHotelParameters(destination, apiKey);
      setEntityId(entity);
    };
    fetchParams();
  }, [destination]);

  // Effect to fetch hotels when entityId or dates change
  useEffect(() => {
    const getHotels = async () => {
      if (entityId) {
        setLoading(true);
        const { hotels: fetchedHotels, hotelId: fetchedHotelId } =
          await fetchHotels(entityId, fromDate, toDate, apiKey);
        setHotels(fetchedHotels);
        setHotelId(fetchedHotelId); // Set hotelId from fetched data
        setLoading(false);
      }
    };
    getHotels();
  }, [entityId, fromDate, toDate]);

  // Function to handle search button click
  const handleSearch = () => {
    setEntityId(""); 
    fetchHotelParameters(destination); 
  };

  return (
    <div className="w-full p-4">
      {/* Search Section */}
      <div className="w-full mb-4">
        <h2 className="text-xl font-bold mb-4">Search Hotels</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Search
          </button>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4">Hotels in {destination}</h2>

        {loading ? (
          <p>Loading hotels...</p>
        ) : hotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.hotelId}
                hotel={hotel}
                onClick={() => {
                  navigate(`/hotel-details`, {
                    state: { hotel, hotelId, entityId, fromDate, toDate },
                  });
                }}
              />
            ))}
          </div>
        ) : (
          <p>No hotels found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
}

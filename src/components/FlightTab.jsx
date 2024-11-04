import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import { useLocation } from "react-router-dom";
import { fetchFlightParameters } from "../../api/fetchFlightParameters";
import { fetchFlightDetails } from "../../api/fetchFlightDetails";

export default function FlightTab() {
  const apiKey = import.meta.env.VITE_CITY_API_KEY; // Use environment variable for API key
  const location = useLocation();

  const { destination: initialDestination, fromDate: initialFromDate } =
    location.state || {};

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState(initialDestination || "");
  const [fromDate, setFromDate] = useState(initialFromDate || "");
  const [originSkyId, setOriginSkyId] = useState("");
  const [originEntityId, setOriginEntityId] = useState("");
  const [destinationSkyId, setDestinationSkyId] = useState("");
  const [destinationEntityId, setDestinationEntityId] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (origin) {
        fetchFlightParameters(origin, apiKey)
          .then((params) => {
            setOriginSkyId(params.skyId);
            setOriginEntityId(params.entityId);
          })
          .catch((err) => setError(err.message));
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [origin]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (destination) {
        fetchFlightParameters(destination, apiKey)
          .then((params) => {
            setDestinationSkyId(params.skyId);
            setDestinationEntityId(params.entityId);
          })
          .catch((err) => setError(err.message));
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [destination]);

  useEffect(() => {
    const fetchFlights = async () => {
      if (!originSkyId || !destinationSkyId || !fromDate) return;
      setLoading(true);
      setError("");
      try {
        const fetchedFlights = await fetchFlightDetails(
          originSkyId,
          destinationSkyId,
          originEntityId,
          destinationEntityId,
          fromDate,
          apiKey
        );
        setFlights(fetchedFlights);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [originSkyId, destinationSkyId, fromDate, apiKey]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
        Search Flights
      </h2>
      <div className="bg-white rounded-lg shadow-md p-4 mb-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="flex-grow">
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Origin"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Origin"
          />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Destination"
          />
        </div>
        <div className="flex-grow">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Departure Date"
          />
        </div>
        <button
          onClick={() => {
            /* Optionally handle search manually */
          }}
          disabled={loading || !originSkyId || !destinationSkyId || !fromDate}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-all"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {loading && <div className="text-center text-gray-500">Loading...</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flights.map((itinerary) => (
          <FlightCard
            key={itinerary.id}
            flightNumber={itinerary.legs[0].segments[0].flightNumber}
            origin={itinerary.legs[0].origin.displayCode}
            destination={itinerary.legs[0].destination.displayCode}
            price={itinerary.price.formatted}
            duration={itinerary.legs[0].durationInMinutes}
            departureTime={new Date(
              itinerary.legs[0].departure
            ).toLocaleString()}
            arrivalTime={new Date(itinerary.legs[0].arrival).toLocaleString()}
            originAirport={itinerary.legs[0].origin.name}
            destinationAirport={itinerary.legs[0].destination.name}
          />
        ))}
      </div>
    </div>
  );
}

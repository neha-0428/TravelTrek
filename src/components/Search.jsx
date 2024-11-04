import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { fetchCitySuggestions } from "../../api/fetchCitySuggestions";
import DestinationInput from "./DestinationInput";
import DateInput from "./DateInput";

export default function Search() {
  const apiKey = import.meta.env.VITE_CITY_API_KEY; // Corrected environment variable key
  const [destination, setDestination] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [locationId, setLocationId] = useState("");
  const navigate = useNavigate();

  // Debounce function with cleanup
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch suggestions with debouncing and error handling
  const fetchSuggestions = async (query) => {
    if (query.length >= 3) {
      try {
        const results = await fetchCitySuggestions(query, apiKey);
        setSuggestions(results || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if query length is less than 3
    }
  };

  const fetchSuggestionsDebounced = useCallback(
    debounce(fetchSuggestions, 300),
    []
  );

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    if (value === "") {
      setSuggestions([]); // Clear suggestions if input is empty
    } else {
      fetchSuggestionsDebounced(value);
    }
  };

  const getResults = (event) => {
    event.preventDefault();
    navigate("/searchResult", {
      state: { destination, fromDate, toDate, locationId },
    });
  };

  return (
    <div className="relative z-20 w-3/4 max-w-8xl bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl backdrop-blur-lg">
      <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
        Plan Your Perfect Trip
      </h1>

      <form
        onSubmit={getResults}
        className="flex flex-col md:flex-row gap-4 items-center justify-center"
      >
        <DestinationInput
          destination={destination}
          setDestination={setDestination}
          setLocationId={setLocationId}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          handleDestinationChange={handleDestinationChange}
        />
        <DateInput label="From" date={fromDate} setDate={setFromDate} />
        <DateInput label="To" date={toDate} setDate={setToDate} />
        <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-lg">
          Search
        </button>
      </form>
    </div>
  );
}

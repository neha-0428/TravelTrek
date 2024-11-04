import React, { useRef } from "react";

export default function DestinationInput({
  destination,
  setDestination,
  setLocationId,
  suggestions,
  setSuggestions,
  handleDestinationChange,
}) {
  const suggestionsRef = useRef(null);

  return (
    <div className="flex-1 relative" ref={suggestionsRef}>
      <label
        htmlFor="destination"
        className="block text-lg font-medium text-gray-800 mb-2"
      >
        Search Destination
      </label>
      <input
        type="text"
        id="destination"
        placeholder="Enter your destination"
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
        value={destination }
        onChange={handleDestinationChange}
        // onChange={(e) => setDestination(e.target.value)}
        required
      />
      {/* Suggestion List */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-30">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                setDestination(city.name);
                setLocationId(city.locationId);
                setSuggestions([]);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

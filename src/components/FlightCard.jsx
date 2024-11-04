import React from "react";

// export default function FlightCard(){
export default function FlightCard({
  flightNumber,
  origin,
  destination,
  price,
  duration,
  departureTime,
  arrivalTime,
  originAirport,
  destinationAirport,
}) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
      <h3 className="font-bold text-lg mb-2">Flight: {flightNumber}</h3>
      <p>
        <span className="font-semibold">From:</span> {originAirport} ({origin})
      </p>
      <p>
        <span className="font-semibold">To:</span> {destinationAirport} (
        {destination})
      </p>
      <p>
        <span className="font-semibold">Departure:</span> {departureTime}
      </p>
      <p>
        <span className="font-semibold">Arrival:</span> {arrivalTime}
      </p>
      <p>
        <span className="font-semibold">Duration:</span> {duration} minutes
      </p>
      <p className="text-lg font-bold text-blue-600 mt-2">{price}</p>
    </div>
  );
}

import React from "react";

export default function HotelCard({ hotel, onClick }) {
  return (
    <div
      className="hotel-card border p-4 rounded shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
      onClick={onClick}
    >
      <img
        src={hotel.heroImage || "/placeholder-image.jpg"}
        alt={hotel.name}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold">{hotel.name}</h3>
      <p className="text-gray-600">Price: ${hotel.price}</p>
      <p className="text-gray-600">Stars: {hotel.stars}</p>
    </div>
  );
}

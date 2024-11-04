import React from "react";
import { useNavigate } from "react-router-dom";

export default function Popular() {
  const navigate = useNavigate();

  // Define popular destinations
  const popularDestinations = [
    {
      name: "Paris",
      image:
        "https://myfrenchcountryhomemagazine.com/wp-content/uploads/2024/02/city-of-love-hero.jpg",
      locationId: "187147",
    },
    {
      name: "Tokyo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmwcTTvkWuiTRK3Qr9TgkfwLfj509jXF2zQ&s",
      locationId: "298184",
    },
    {
      name: "New York",
      image:
        "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/destination/United-States/New-York/112100_SCN_NewYork_iStock901277560_ZAB1A1/New-York-Scenery.jpg?tr=w-780%2Ch-437%2Cfo-auto",
      locationId: "60763",
    },
    {
      name: "Sydney",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/cf/69/07/sydney-harbour.jpg",
      locationId: "255060",
    },
    {
      name: "Dubai",
      image:
        "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/campaigns/stayhome/reflecting-on-the-beauty-of-dubai/content_istock_downtown-dubai-at-sunrise_913519636251463244_robertbreitpaul.jpg?modified=20200417093955",
      locationId: "295424",
    },
    {
      name: "London",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxeRkVbN6nIjPIEN-P6BOM16IkL2vI6S0pA&s",
      locationId: "186338",
    },
  ];

  // Set default dates
  const defaultFromDate = new Date();
  const defaultToDate = new Date();
  defaultToDate.setDate(defaultFromDate.getDate() + 3); // Default to 3 days later

  // Format dates to YYYY-MM-DD
  const formattedFromDate = defaultFromDate.toISOString().split("T")[0];
  const formattedToDate = defaultToDate.toISOString().split("T")[0];

  // Navigate to SearchResults with destination, locationId, and default dates
  const handleDestinationClick = (destination, locationId) => {
    navigate("/searchResult", {
      state: {
        destination,
        fromDate: formattedFromDate,
        toDate: formattedToDate,
        locationId,
      },
    });
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {popularDestinations.map((dest, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl"
            onClick={() => handleDestinationClick(dest.name, dest.locationId)} // Pass locationId here
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 hover:opacity-80 transition-opacity duration-300 flex items-end">
              <span className="text-white text-2xl font-semibold p-4">
                {dest.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

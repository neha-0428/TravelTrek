import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AttractionTab from "./AttractionTab";
import HotelTab from "./HotelTab";
import FlightTab from "./FlightTab";

export default function SearchResults() {
  const { state } = useLocation();
  const { destination, fromDate, toDate, locationId } = state;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("attractions");

  const renderTabContent = () => {
    switch (activeTab) {
      case "attractions":
        return (
          <AttractionTab
            locationId={locationId}
            fromDate={fromDate}
            toDate={toDate}
          />
        );
      case "flights":
        return <FlightTab destination={destination} fromDate={fromDate} />;
      case "hotels":
        return (
          <HotelTab
            destination={destination}
            fromDate={fromDate}
            toDate={toDate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 mt-8 flex flex-col items-center">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
        aria-label="Back to Home"
      >
        Back to Home
      </button>

      {/* Tabs */}
      <div className="mb-4 mt-8">
        <ul className="flex space-x-4">
          {["attractions", "flights", "hotels"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      {renderTabContent()}
    </div>
  );
}

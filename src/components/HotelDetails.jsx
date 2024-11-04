import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchHotelDetails } from "../../api/fetchHotelDetails";
import { fetchHotelPrices } from "../../api/fetchHotelPrices";

export default function HotelDetails() {
  const apiKey = import.meta.env.VITE_CITY_API_KEY;
  const location = useLocation();
  const {
    hotelId,
    entityId,
    fromDate,
    toDate,
    adults = 1,
    rooms = 1,
  } = location.state || {}; // Add defaults if missing

  const [hotelDetails, setHotelDetails] = useState(null);
  const [priceDetails, setPriceDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadHotelData = async () => {
    setLoading(true);
    try {
      if (!hotelId || !entityId) {
        throw new Error("Hotel ID or Entity ID is missing.");
      }

      const details = await fetchHotelDetails(hotelId, entityId, apiKey);
      setHotelDetails(details);

      const prices = await fetchHotelPrices(
        hotelId,
        entityId,
        fromDate,
        toDate,
        adults,
        rooms,
        apiKey,
      );
      setPriceDetails(prices);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHotelData();
  }, [hotelId, entityId]);

  if (loading) return <p>Loading hotel details...</p>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!hotelDetails) return <div>No hotel details available.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Hero Image */}
      <div className="mb-6">
        <img
          src={hotelDetails.goodToKnow.description.image || ""}
          alt={`${hotelDetails.general.name} Image`}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Hotel Information */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        {hotelDetails.general.name}
      </h1>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 text-xl">
          {"⭐".repeat(hotelDetails.general.stars || 0)}
        </span>
      </div>

      {/* Check-in/Check-out Time */}
      <div className="flex justify-between text-gray-700 mb-4">
        <p>
          <strong>Check-in from:</strong>{" "}
          {hotelDetails.goodToKnow.checkinTime.time || "N/A"}
        </p>
        <p>
          <strong>Check-out before:</strong>{" "}
          {hotelDetails.goodToKnow.checkoutTime.time || "N/A"}
        </p>
      </div>

      {/* Address and Description */}
      <p className="text-gray-700 mb-2">
        {hotelDetails.location.address || "Address not available"}
      </p>
      <p className="text-gray-700 mb-6">
        {hotelDetails.goodToKnow.description.content ||
          "Description not available"}
      </p>

      {/* Price and Distance */}
      <div className="price-details">
        <h2>Price Details</h2>
        <p>Price: {`${priceDetails?.metaInfo?.rates?.[0]?.price}` || "N/A"}</p>
        <p>Policies: {priceDetails?.metaInfo?.rates[0]?.roomPolicies}</p>
        {priceDetails?.metaInfo?.rates[0]?.deeplink && (
          <a
            href={priceDetails?.metaInfo?.rates?.[0]?.deeplink}
            target="_blank"
            rel="noopener noreferrer"
            className="book-now-button p-1 bg-blue-500 rounded-md"
          >
            Book Now
          </a>
        )}
      </div>
      <p className="text-gray-700 mb-4">
        {hotelDetails.distance || "Distance not available"}
      </p>

      {/* Amenities */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Amenities:</h3>
        {hotelDetails.amenities.content?.[0]?.description}
      </div>

      {/* Review Summary */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Reviews:</h3>
        <p className="text-gray-700 mb-4">
          {hotelDetails.reviews.numberOfReviewsLabel}
        </p>
        {hotelDetails.reviews.rating}
      </div>

      {/* Image Gallery */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">More Images:</h3>
        <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
          {(hotelDetails.gallery.images || [])
            .slice(0, 10)
            .map((image, index) => (
              <img
                key={index}
                src={image.dynamic || ""}
                alt={`Image ${index + 1}`}
                className="w-40 h-40 object-cover rounded-lg"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

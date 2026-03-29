import { apiClient } from "./apiClient";
import { dummyHotelDetails } from "../data/dummyData";

export const fetchHotelDetails = async (hotelId, entityId, apiKey) => {
  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotelId=${hotelId}&entityId=${entityId}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
      "Content-Type": "application/json",
    },
  };

  try {
    const data = await apiClient(url, options, { status: true, data: dummyHotelDetails });

    if (!data.status) throw new Error(data.message || "Failed to fetch hotel details.");

    return data.data; // Return hotel details
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw new Error("Failed to fetch hotel details.");
  }
};

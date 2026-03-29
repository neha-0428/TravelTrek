import { apiClient } from "./apiClient";
import { dummyHotels } from "../data/dummyData";

export const fetchHotels = async (entityId, fromDate, toDate, apiKey) => {
  if (!entityId || !fromDate || !toDate) return { hotels: [], hotelId: null };

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/searchHotels?entityId=${entityId}&checkin=${fromDate}&checkout=${toDate}`;
  const options = {
    headers: {
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const data = await apiClient(url, options, { data: { hotels: dummyHotels } });
    const hotels = Array.isArray(data?.data?.hotels) ? data.data.hotels : [];
    const hotelId = hotels.length > 0 ? hotels[0].hotelId : null;

    return { hotels, hotelId };
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return { hotels: [], hotelId: null };
  }
};

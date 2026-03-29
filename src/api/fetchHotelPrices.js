import { apiClient } from "./apiClient";
import { dummyHotelPrices } from "../data/dummyData";

export const fetchHotelPrices = async (
  hotelId,
  entityId,
  fromDate,
  toDate,
  adults,
  rooms,
  apiKey,
) => {
  const formattedFromDate = new Date(fromDate).toISOString().split("T")[0];
  const formattedToDate = new Date(toDate).toISOString().split("T")[0];

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/getHotelPrices?hotelId=${hotelId}&entityId=${entityId}&checkin=${formattedFromDate}&checkout=${formattedToDate}&adults=${adults}&rooms=${rooms}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const data = await apiClient(url, options, { data: dummyHotelPrices });
    return data.data; // Return price details
  } catch (error) {
    console.error("Error fetching hotel prices:", error);
    throw new Error("Failed to fetch hotel prices.");
  }
};

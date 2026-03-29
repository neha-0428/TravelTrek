import { apiClient } from "./apiClient";
import { dummyHotelParams } from "../data/dummyData";

export const fetchHotelParameters = async (destination, apiKey) => {
  if (!destination) return null;

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/searchDestinationOrHotel?query=${destination}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const data = await apiClient(url, options, { data: dummyHotelParams });
    return data?.data?.[0]?.entityId || null;
  } catch (error) {
    console.error("Error fetching hotel parameters:", error);
    return null;
  }
};

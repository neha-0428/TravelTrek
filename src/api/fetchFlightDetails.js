import { apiClient } from "./apiClient";
import { dummyFlights } from "../data/dummyData";

export const fetchFlightDetails = async (
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  fromDate,
  apiKey
) => {
  const formattedDate = new Date(fromDate).toISOString().split("T")[0];

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&originEntityId=${originEntityId}&destinationEntityId=${destinationEntityId}&date=${formattedDate}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const data = await apiClient(url, options, { status: true, data: { itineraries: dummyFlights } });
    if (data.status && data.data.itineraries) {
      return data.data.itineraries;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw new Error("Failed to fetch flights.");
  }
};

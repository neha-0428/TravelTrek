import { apiClient } from "./apiClient";
import { dummyFlightParams } from "../data/dummyData";

export const fetchFlightParameters = async (query, apiKey) => {
  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const data = await apiClient(url, options, { data: dummyFlightParams });
    const firstResult = data?.data?.[0];
    const relevantFlightParams = firstResult?.navigation?.relevantFlightParams;
    return relevantFlightParams || {};
  } catch (error) {
    console.error("Error fetching flight parameters:", error);
    throw new Error("Failed to fetch flight parameters.");
  }
};

// src/api/fetchFlightParameters.js
export const fetchFlightParameters = async (query, apiKey) => {
  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );
    const data = await response.json();
    const firstResult = data?.data?.[0];
    const relevantFlightParams = firstResult?.navigation?.relevantFlightParams;
    return relevantFlightParams || {};
  } catch (error) {
    console.error("Error fetching flight parameters:", error);
    throw new Error("Failed to fetch flight parameters.");
  }
};

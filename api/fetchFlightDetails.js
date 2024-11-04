// src/api/fetchFlightDetails.js
export const fetchFlightDetails = async (
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  fromDate,
  apiKey
) => {
  const formattedDate = new Date(fromDate).toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&originEntityId=${originEntityId}&destinationEntityId=${destinationEntityId}&date=${formattedDate}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );
    const data = await response.json();
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

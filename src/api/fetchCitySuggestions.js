import { apiClient } from "./apiClient";
import { dummyCitySuggestions } from "../data/dummyData";

export const fetchCitySuggestions = async (query, apiKey) => {
  if (query.length < 3) return [];

  const url = `https://tripadvisor-com1.p.rapidapi.com/auto-complete?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "tripadvisor-com1.p.rapidapi.com",
    },
  };

  try {
    const data = await apiClient(url, options, { data: dummyCitySuggestions });

    return data.data.map((suggestion) => ({
      name: suggestion.heading.htmlString.replace(/<\/?b>/g, ""),
      locationId: suggestion.geoId,
      country: suggestion.secondaryTextLineOne?.string || "",
    }));
  } catch (error) {
    console.error("Error fetching city suggestions:", error);
    throw error;
  }
};

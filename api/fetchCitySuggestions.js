// fetchCitySuggestions.js
export const fetchCitySuggestions = async (query, apiKey) => {
  if (query.length < 3) return [];
  try {
    const response = await fetch(
      `https://tripadvisor-com1.p.rapidapi.com/auto-complete?query=${query}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "tripadvisor-com1.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();

    if (!response.ok)
      throw new Error(data.message || "Error fetching suggestions");

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

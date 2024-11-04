// api/fetchAttractions.js
export const fetchAttractions = async (
  locationId,
  fromDate,
  toDate,
  apiKey
) => {
  if (!locationId) return [];

  const formattedStartDate = fromDate
    ? new Date(fromDate).toISOString().split("T")[0]
    : null;
  const formattedEndDate = toDate
    ? new Date(toDate).toISOString().split("T")[0]
    : null;

  console.log("Fetching attractions for:", {
    locationId,
    formattedStartDate,
    formattedEndDate,
  });

  const response = await fetch(
    `https://tripadvisor-com1.p.rapidapi.com/attractions/search?geoId=${locationId}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor-com1.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching attractions");
  }

  const data = await response.json();
  console.log("API response:", data);
  return data.data?.attractions || [];
};

import { apiClient } from "./apiClient";
import { dummyAttractions } from "../data/dummyData";

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

  const url = `https://tripadvisor-com1.p.rapidapi.com/attractions/search?geoId=${locationId}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tripadvisor-com1.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };

  try {
    const data = await apiClient(url, options, { data: { attractions: dummyAttractions } });
    return data.data?.attractions || [];
  } catch (error) {
    console.error("Error fetching attractions:", error);
    return [];
  }
};

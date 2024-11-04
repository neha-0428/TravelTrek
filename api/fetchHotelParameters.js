// Function to fetch hotel parameters based on the destination
export const fetchHotelParameters = async (destination, apiKey) => {
  if (!destination) return null; // Exit if destination is empty
  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/searchDestinationOrHotel?query=${destination}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );
    const data = await response.json();
    return data?.data?.[0]?.entityId || null; // Return entityId or null
  } catch (error) {
    console.error("Error fetching hotel parameters:", error);
    return null; // Return null on error
  }
};

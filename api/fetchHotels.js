export const fetchHotels = async (entityId, fromDate, toDate, apiKey) => {
  if (!entityId || !fromDate || !toDate) return { hotels: [], hotelId: null }; // Exit if parameters are not set
  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/searchHotels?entityId=${entityId}&checkin=${fromDate}&checkout=${toDate}`,
      {
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );

    const data = await response.json();
    const hotels = Array.isArray(data?.data?.hotels) ? data.data.hotels : []; // Extract hotels
    const hotelId = hotels.length > 0 ? hotels[0].hotelId : null; // Get hotelId from the first hotel if available

    return { hotels, hotelId }; // Return both hotels and hotelId
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return { hotels: [], hotelId: null }; // Return empty array and null hotelId on error
  }
};

// fetchHotelDetails.js

export const fetchHotelDetails = async (hotelId, entityId, apiKey) => {
  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotelId=${hotelId}&entityId=${entityId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    if (!data.status) throw new Error(data.message);

    return data.data; // Return hotel details
  } catch (error) {
    throw new Error("Failed to fetch hotel details.");
  }
};

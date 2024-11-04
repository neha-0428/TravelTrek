// fetchHotelPrices.js

export const fetchHotelPrices = async (
  hotelId,
  entityId,
  fromDate,
  toDate,
  adults,
  rooms,
  apiKey,
) => {
  const formattedFromDate = new Date(fromDate).toISOString().split("T")[0];
  const formattedToDate = new Date(toDate).toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/getHotelPrices?hotelId=${hotelId}&entityId=${entityId}&checkin=${formattedFromDate}&checkout=${formattedToDate}&adults=${adults}&rooms=${rooms}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    return data.data; // Return price details
  } catch (error) {
    throw new Error("Failed to fetch hotel prices.");
  }
};

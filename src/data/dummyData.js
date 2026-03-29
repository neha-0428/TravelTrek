export const dummyCitySuggestions = [
  {
    heading: { htmlString: "Paris, France" },
    geoId: "187147",
    secondaryTextLineOne: { string: "France" },
  },
  {
    heading: { htmlString: "New York City, USA" },
    geoId: "60763",
    secondaryTextLineOne: { string: "USA" },
  },
  {
    heading: { htmlString: "Tokyo, Japan" },
    geoId: "298184",
    secondaryTextLineOne: { string: "Japan" },
  },
  {
    heading: { htmlString: "London, UK" },
    geoId: "186338",
    secondaryTextLineOne: { string: "UK" },
  },
  {
    heading: { htmlString: "Dubai, UAE" },
    geoId: "295424",
    secondaryTextLineOne: { string: "UAE" },
  },
];

export const dummyHotels = [
  {
    hotelId: "h1",
    name: "Luxury Plaza Hotel",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 250,
    stars: 5,
  },
  {
    hotelId: "h2",
    name: "Cozy Garden Inn",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 120,
    stars: 3,
  },
  {
    hotelId: "h3",
    name: "Modern Urban Suites",
    heroImage: "https://images.unsplash.com/photo-1551882547-ff43c63faf76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 180,
    stars: 4,
  },
];

export const dummyFlights = [
  {
    id: "f1",
    price: { formatted: "$450" },
    legs: [
      {
        origin: { displayCode: "NYC", name: "JFK Airport" },
        destination: { displayCode: "PAR", name: "Charles de Gaulle" },
        durationInMinutes: 480,
        departure: "2026-06-01T10:00:00",
        arrival: "2026-06-01T22:00:00",
        segments: [{ flightNumber: "AF123" }],
      },
    ],
  },
  {
    id: "f2",
    price: { formatted: "$520" },
    legs: [
      {
        origin: { displayCode: "LON", name: "Heathrow Airport" },
        destination: { displayCode: "NYC", name: "JFK Airport" },
        durationInMinutes: 420,
        departure: "2026-06-01T14:00:00",
        arrival: "2026-06-01T17:00:00",
        segments: [{ flightNumber: "BA456" }],
      },
    ],
  },
];

export const dummyAttractions = [
  {
    saveId: {id: 1},
    cardTitle: { string: "Eiffel Tower" },
    primaryInfo: { text: "Iconic iron lattice tower on the Champ de Mars in Paris." },
    bubbleRating: { rating: 4.8, numberReviews: { string: "15420" } },
    cardPhoto: { sizes: { urlTemplate: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" } },
  },
  {
    saveId: {id: 2},
    cardTitle: { string: "Louvre Museum" },
    primaryInfo: { text: "The world's largest art museum and a historic monument in Paris." },
    bubbleRating: { rating: 4.7, numberReviews: { string: "12300" } },
    cardPhoto: { sizes: { urlTemplate: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" } },
  },
];

export const dummyFlightParams = [
  {
    navigation: {
      relevantFlightParams: {
        skyId: "PAR",
        entityId: "27539733",
      },
    },
  },
];

export const dummyHotelDetails = {
  general: {
    name: "Luxury Plaza Hotel",
    stars: 5,
  },
  goodToKnow: {
    checkinTime: { time: "02:00 PM" },
    checkoutTime: { time: "11:00 AM" },
    description: {
      content: "A beautiful luxury hotel in the heart of the city.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  location: {
    address: "123 Travel St, Paris, France",
  },
  amenities: {
    content: [{ description: "Free WiFi, Pool, Spa, Gym" }],
  },
  reviews: {
    numberOfReviewsLabel: "1,234 Reviews",
    rating: 4.8,
  },
  gallery: {
    images: [
      { dynamic: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { dynamic: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    ],
  },
  distance: "0.5 miles from center",
};

export const dummyHotelParams = [
  {
    entityId: "27539733",
  },
];

export const dummyHotelPrices = {
  price: "$250 per night",
  total: "$500 for 2 nights",
  options: [
    { provider: "Expedia", price: "$250" },
    { provider: "Booking.com", price: "$260" },
  ],
};

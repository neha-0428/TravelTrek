/**
 * TravelTrek API Client
 * 
 * Handles switching between live API and dummy data based on the 'api=true' query parameter.
 */

const getMode = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("api") === "true" ? "live" : "dummy";
};

export const apiClient = async (url, options = {}, dummyData) => {
  const mode = getMode();

  if (mode === "dummy") {
    console.log(`[API Client] Returning dummy data for: ${url}`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return dummyData;
  }

  console.log(`[API Client] Fetching live data from: ${url}`);
  const response = await fetch(url, options);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

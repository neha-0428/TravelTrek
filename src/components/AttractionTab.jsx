import React, { useState, useEffect, useCallback } from "react";
import AttractionCard from "./AttractionCard";
import { fetchAttractions as fetchAttractionsApi } from "../../api/fetchAttractions"; // Rename imported function
import _ from "lodash"; // Import lodash for debouncing

export default function AttractionTab({ locationId, fromDate, toDate }) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const apiKey = import.meta.env.VITE_CITY_API_KEY;

  // Debounced fetchAttractions function
  const fetchAttractionsDebounced = useCallback(
    _.debounce(async () => {
      if (!locationId) return;

      setLoading(true); // Start loading when fetch begins
      try {
        const results = await fetchAttractionsApi(
          locationId,
          fromDate,
          toDate,
          apiKey
        );
        setAttractions(results);
      } catch (error) {
        console.error("Error fetching attractions:", error);
      } finally {
        setLoading(false); // Stop loading once fetch completes
      }
    }, 500), // Debounce delay of 500ms
    [locationId, fromDate, toDate, apiKey] // Ensure apiKey is included in the dependencies
  );

  useEffect(() => {
    fetchAttractionsDebounced();
    // Cancel debounce on cleanup
    return () => {
      fetchAttractionsDebounced.cancel();
    };
  }, [fetchAttractionsDebounced]);

  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">Attractions</h3>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching data
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {attractions.length > 0 ? (
            attractions.map((attraction) => (
              <AttractionCard
                key={attraction.saveId.id}
                title={attraction.cardTitle.string}
                description={attraction.primaryInfo.text}
                rating={attraction.bubbleRating.rating}
                reviews={attraction.bubbleRating.numberReviews.string}
                sizes={attraction.cardPhoto.sizes}
              />
            ))
          ) : (
            <p>No attractions found</p> // Show message if no attractions are fetched
          )}
        </div>
      )}
    </section>
  );
}

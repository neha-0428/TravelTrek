import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        About TravelTrek
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
        Welcome to{" "}
        <span className="text-blue-600 font-semibold">TravelTrek</span> – your
        ultimate guide to exploring the world. We’re here to inspire you to
        discover breathtaking destinations, plan unforgettable trips, and create
        memories that last a lifetime. Whether you're a solo traveler, an
        adventure seeker, or planning a family getaway, we've got you covered!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="https://img.icons8.com/ios-filled/50/4a90e2/compass.png"
            alt="Discover Destinations"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Discover Destinations
          </h3>
          <p className="text-gray-600 text-center">
            Explore top destinations worldwide and uncover hidden gems that
            match your travel style.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="https://img.icons8.com/ios-filled/50/4a90e2/airplane-take-off.png"
            alt="Plan Your Trip"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Plan Your Trip
          </h3>
          <p className="text-gray-600 text-center">
            Seamlessly plan your itinerary with our integrated flight, hotel,
            and attraction booking tools.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="https://img.icons8.com/ios-filled/50/4a90e2/suitcase.png"
            alt="Travel with Confidence"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Travel with Confidence
          </h3>
          <p className="text-gray-600 text-center">
            Enjoy a stress-free experience with personalized recommendations and
            up-to-date travel info.
          </p>
        </div>
      </div>

      <p className="text-md text-gray-500 text-center max-w-xl mt-12">
        Our team of travel enthusiasts is dedicated to bringing you the best
        resources, guides, and tools to make your journeys as enriching and
        effortless as possible. With{" "}
        <span className="text-blue-600 font-semibold">TravelTrek</span>, the
        world is at your fingertips – start your adventure today!
      </p>
    </div>
  );
}

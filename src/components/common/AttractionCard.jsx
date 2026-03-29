import React from "react";

export default function AttractionCard({
  title,
  description,
  rating,
  reviews,
  sizes,
}) {
  const photo = sizes.urlTemplate.split("?")[0];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={photo} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center">
          <span className="font-bold text-blue-600">Ratings: {rating}</span>
          <span className="text-gray-500 ml-2">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
}

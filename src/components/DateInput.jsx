import React from "react";

export default function DateInput({ label, date, setDate }) {
  return (
    <div className="flex-1">
      <label
        htmlFor={label}
        className="block text-lg font-medium text-gray-800 mb-2"
      >
        {label}
      </label>
      <input
        type="date"
        id={label}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
        required
      />
    </div>
  );
}

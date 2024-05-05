/* eslint-disable react/prop-types */
import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div>
      <label>
        Location:
        <select name="location" value={filters.location} onChange={handleFilterChange}>
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          {/* Add more locations as needed */}
        </select>
      </label>
      <label>
        Experience:
        <select name="experience" value={filters.experience} onChange={handleFilterChange}>
          <option value="">All Experience</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          {/* Add more experience options as needed */}
        </select>
      </label>
      {/* Add more filter inputs for other criteria */}
    </div>
  );
};

export default Filter;

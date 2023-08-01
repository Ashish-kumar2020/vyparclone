// src/components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ label }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4  text-black  rounded focus:outline-none"
      >
        {label} {isDropdownOpen ? '▲' : '▼'}
      </button>
      {isDropdownOpen && (
        <ul className="absolute top-10 right-0 bg-white shadow-lg">
          <li className="py-2 px-4 hover:bg-blue-200">Option 1</li>
          <li className="py-2 px-4 hover:bg-blue-200">Option 2</li>
          <li className="py-2 px-4 hover:bg-blue-200">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

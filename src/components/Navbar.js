import React, { useState } from 'react';
import logo from '../Assets/companylogo.jpg';
import Dropdown from './Dropdown';
import FormComponent from './FormComponent';

const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setInputValue(event.target.value);
      setShowInput(false);
    }
  };

  const handleBlur = () => {
    setShowInput(false);
  };

  const handleImageClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="header flex flex-col md:flex-row items-center justify-between shadow-lg px-4 py-2 md:px-10">
      <div className="logo-container flex items-center">
        <img
          className="logo w-16 md:w-24 cursor-pointer"
          src={logo}
          alt="companylogo"
          onClick={handleImageClick}
        />
        {showForm && <FormComponent onClose={handleCloseForm} />}
        {showInput && (
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            onBlur={handleBlur}
            placeholder="Enter Company Name..."
            className="border border-gray-400 p-2 mt-2 md:mt-0 md:w-40 lg:w-60"
          />
        )}
        {inputValue && !showInput && (
          <p className="w-40 lg:w-60 mt-2 md:mt-0"> {inputValue}</p>
        )}
      </div>
      <div className="nav-items mt-4 md:mt-0">
        <ul className="flex flex-wrap md:flex-row">
          <li className="nav-list px-3 py-1 cursor-pointer">Home</li>
          <li className="nav-list px-3 py-1 cursor-pointer">Parties</li>
          <li className="nav-list px-3 py-1 cursor-pointer">Items</li>
          <div className="relative">
            <Dropdown label="Sales" />
          </div>
          <div className="relative">
            <Dropdown label="Purchase" />
          </div>
          <li className="nav-list px-3 py-1 cursor-pointer">Expense</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

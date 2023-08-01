// src/components/FormComponent.js
import React, { useState } from 'react';

const FormComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here (e.g., submit it to the server)
    // You can also close the form component here using the onClose callback
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute  bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Form Component</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded resize-none"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Add Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;

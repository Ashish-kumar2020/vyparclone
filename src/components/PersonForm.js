// src/components/PersonForm.js
import React, { useState } from 'react';

const PersonForm = ({ addPerson }) => {
  const [personName, setPersonName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personName.trim() !== '') {
      addPerson(personName);
      setPersonName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <label className="mr-2">Person Name:</label>
        <input
          type="text"
          placeholder="Enter person's name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          className="border rounded py-1 px-2"
        />
        <button type="submit" className="bg-blue-500 text-white ml-2 py-1 px-4 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;

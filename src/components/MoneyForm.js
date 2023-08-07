// src/components/MoneyForm.js
import React, { useState } from 'react';

const MoneyForm = ({ addReceivedMoney }) => {
  const [receivedAmount, setReceivedAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (receivedAmount > 0) {
      addReceivedMoney(parseFloat(receivedAmount));
      setReceivedAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <label className="mr-2">Received Amount:</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={receivedAmount}
          onChange={(e) => setReceivedAmount(e.target.value)}
          className="border rounded py-1 px-2 w-24"
        />
        <button type="submit" className="bg-blue-500 text-white ml-2 py-1 px-4 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default MoneyForm;

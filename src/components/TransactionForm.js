// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, persons }) => {
  const [type, setType] = useState('received');
  const [amount, setAmount] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0 && selectedPerson) {
      const newTransaction = {
        type,
        amount: parseFloat(amount),
        person: selectedPerson,
      };
      addTransaction(newTransaction);
      setAmount('');
      setSelectedPerson('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col">
        <label className="mb-2">Transaction Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded py-1 px-2 mb-2"
        >
          <option value="received">Received</option>
          <option value="spent">Spent</option>
        </select>
        <label className="mb-2">Amount:</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded py-1 px-2 mb-2"
        />
        <label className="mb-2">Person:</label>
        <select
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
          className="border rounded py-1 px-2 mb-2"
        >
          <option value="">Select person</option>
          {persons.map((person, index) => (
            <option key={index} value={person}>
              {person}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;

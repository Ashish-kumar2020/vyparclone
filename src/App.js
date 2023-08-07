// src/App.js
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';
import PersonForm from './components/PersonForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [persons, setPersons] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const addPerson = (personName) => {
    setPersons([...persons, personName]);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Transaction Tracker App</h1>
        <TransactionForm addTransaction={addTransaction} persons={persons} />
        <TransactionHistory transactions={transactions} />
        <PersonForm addPerson={addPerson} />
      </div>
    </div>
  );
}

export default App;

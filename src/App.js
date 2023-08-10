// src/App.js
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';
import PersonForm from './components/PersonForm';
import StockTracker from './components/StockTracker';
import SentItemsTracker from './components/SentItemsTracker';
// import Navbar from './components/Navbar';
import BillGenerator from './components/BillGenerator'
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
        {/* <Navbar/> */}
      <h1>Transcation history</h1>
        <TransactionForm addTransaction={addTransaction} persons={persons} />
        <TransactionHistory transactions={transactions} />
        <PersonForm addPerson={addPerson} />
        <BillGenerator/>
        <StockTracker/>
        <SentItemsTracker/>
      </div>
    </div>
  );
}

export default App;

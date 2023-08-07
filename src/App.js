// src/App.js
import React, { useState } from 'react';
import MoneyForm from './components/MoneyForm';
import MoneyTracker from './components/MoneyTracker';

function App() {
  const [receivedMoney, setReceivedMoney] = useState(0);

  const addReceivedMoney = (amount) => {
    setReceivedMoney(receivedMoney + amount);
  };

  const remainingBalance = 1000 - receivedMoney; // Assuming a total budget of $1000

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Money Tracker </h1>
        <MoneyForm addReceivedMoney={addReceivedMoney} />
        <MoneyTracker receivedMoney={receivedMoney} remainingBalance={remainingBalance} />
      </div>
    </div>
  );
}

export default App;

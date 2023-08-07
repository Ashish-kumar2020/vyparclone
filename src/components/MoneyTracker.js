// src/components/MoneyTracker.js
import React from 'react';

const MoneyTracker = ({ receivedMoney, remainingBalance }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Money Tracker</h2>
      <p className="text-lg">Total Received: ${receivedMoney.toFixed(2)}</p>
      <p className="text-lg">Remaining Balance: ${remainingBalance.toFixed(2)}</p>
    </div>
  );
};

export default MoneyTracker;

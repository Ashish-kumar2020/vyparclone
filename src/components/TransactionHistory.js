// src/components/TransactionHistory.js
import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="bg-gray-100 p-4 rounded overflow-x-auto">
      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Person</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
              <td className="p-2 border">{transaction.type === 'received' ? 'Received' : 'Spent'}</td>
              <td className="p-2 border">${transaction.amount.toFixed(2)}</td>
              <td className="p-2 border">{transaction.person}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

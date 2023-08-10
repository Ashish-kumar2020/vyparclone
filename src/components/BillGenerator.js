// src/components/BillGenerator.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Update this import line
import ItemRow from './ItemRow';

const BillGenerator = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const addItem = () => {
    // ... (same if (itemName && itemPrice > 0) {
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice,
      };

      setItems([...items, newItem]);
      setItemName('');
      setItemQuantity(1);
      setItemPrice(0);
    }
  

  const deleteItem = (itemId) => {
    // ... (same code as before)
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    // ... (same code as before)
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const generatePDF = () => {
    // ... (same code as before)
    const doc = new jsPDF();
    doc.text('Bill Details', 10, 10);
    doc.autoTable({
      head: [['Item Name', 'Quantity', 'Unit Price', 'Total Price']],
      body: items.map((item) => [item.name, item.quantity, `$${item.price}`, `$${item.quantity * item.price}`]),
      startY: 20,
    });
    doc.text(`Total: $${calculateTotal()}`, 10, doc.autoTable.previous.finalY + 10);
    doc.save('bill.pdf');
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Bill Generator</h1>
      <div className="mb-4">
        {/* ... (same input code as before) */}
        <label className="block font-bold mb-1" htmlFor="itemName">
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded"
        />
      </div>
      <div className="mb-4">
        {/* ... (same input code as before) */}
        <label className="block font-bold mb-1" htmlFor="itemQuantity">
          Quantity
        </label>
        <input
          type="number"
          id="itemQuantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-400 rounded"
        />
      </div>
      <div className="mb-4">
        {/* ... (same input code as before) */}
        <label className="block font-bold mb-1" htmlFor="itemPrice">
          Price
        </label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(parseFloat(e.target.value))}
          className="w-full px-4 py-2 border border-gray-400 rounded"
        />
      </div>
      <button onClick={addItem} className="w-full bg-blue-500 text-white py-2 rounded">
        Add Item
      </button>
      {items.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Added Items:</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {/* ... (same table header code as before) */}
              </thead>
              <tbody>
                {items.map((item) => (
                  <ItemRow key={item.id} item={item} onDelete={deleteItem} />
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={generatePDF} className="w-full mt-4 bg-green-500 text-white py-2 rounded">
            Generate PDF
          </button>
        </div>
      )}
    </div>
  );
};
export default BillGenerator;

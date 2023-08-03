// src/components/BillGenerator.js
import React, { useState } from 'react';
import ItemRow from './ItemRow';

const BillGenerator = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const addItem = () => {
    if (itemName && itemPrice > 0) {
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
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Bill Generator</h1>
      <div className="mb-4">
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
      <button onClick={addItem} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Item
      </button>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.id} item={item} onDelete={deleteItem} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right font-bold">Total:</td>
            <td>${calculateTotal()}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BillGenerator;

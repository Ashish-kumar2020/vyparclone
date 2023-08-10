import React, { useState, useEffect } from 'react';

const SentItemsTracker = () => {
  const [sentItems, setSentItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [receiver, setReceiver] = useState('');
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    const storedSentItems = JSON.parse(localStorage.getItem('sentItems')) || [];
    setSentItems(storedSentItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('sentItems', JSON.stringify(sentItems));
  }, [sentItems]);

  const addSentItem = () => {
    if (itemName && quantity > 0 && receiver && orderDate) {
      const newItem = {
        id: Date.now(),
        itemName,
        quantity,
        receiver,
        orderDate,
      };
      setSentItems([...sentItems, newItem]);
      setItemName('');
      setQuantity(1);
      setReceiver('');
      setOrderDate('');
    }
  };

  const deleteSentItem = (itemId) => {
    const updatedSentItems = sentItems.filter((item) => item.id !== itemId);
    setSentItems(updatedSentItems);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Sent Items Tracker</h1>
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
        <label className="block font-bold mb-1" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-400 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1" htmlFor="receiver">
          Receiver
        </label>
        <input
          type="text"
          id="receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1" htmlFor="orderDate">
          Order Date
        </label>
        <input
          type="date"
          id="orderDate"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded"
        />
      </div>
      <button onClick={addSentItem} className="w-full bg-blue-500 text-white py-2 rounded">
        Add Sent Item
      </button>
      {sentItems.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Sent Items:</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-300">
                  <th className="p-2 border">Item Name</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Receiver</th>
                  <th className="p-2 border">Order Date</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {sentItems.map((item) => (
                  <tr key={item.id} className="bg-gray-100">
                    <td className="p-2 border">{item.itemName}</td>
                    <td className="p-2 border">{item.quantity}</td>
                    <td className="p-2 border">{item.receiver}</td>
                    <td className="p-2 border">{item.orderDate}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => deleteSentItem(item.id)}
                        className="bg-red-500 text-white py-1 px-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SentItemsTracker;

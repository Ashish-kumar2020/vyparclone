// src/components/ItemRow.js
import React from 'react';

const ItemRow = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
      <td>${item.quantity * item.price}</td>
      <td>
        <button onClick={() => onDelete(item.id)} className="text-red-500">Delete</button>
      </td>
    </tr>
  );
};

export default ItemRow;

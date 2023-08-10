import React, { useState, useEffect } from 'react';

const StockTracker = () => {
  const initialProducts = [
    { id: 1, name: 'Product A', stock: 50 },
    { id: 2, name: 'Product B', stock: 30 },
    { id: 3, name: 'Product C', stock: 20 },
  ];

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || initialProducts
  );

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    const newProductId = Math.max(...products.map((product) => product.id)) + 1;
    const newProduct = { id: newProductId, name: '', stock: 0 };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Stock Tracker</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-2 border">Product Name</th>
              <th className="p-2 border">Stock Left</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-gray-100">
                <td className="p-2 border">
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      updateProduct(product.id, { ...product, name: e.target.value })
                    }
                    className="w-full p-1 border rounded"
                    placeholder="Enter product name"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) =>
                      updateProduct(product.id, {
                        ...product,
                        stock: parseInt(e.target.value),
                      })
                    }
                    className="w-full p-1 border rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={addProduct} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Product
      </button>
    </div>
  );
};

export default StockTracker;

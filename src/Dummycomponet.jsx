import React, { useState } from "react";

const ProductList33 = ({name,age}) => {
  // Initial state for the product list
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 100, isAvailable: true },
    { id: 2, name: "Product B", price: 200, isAvailable: false },
    { id: 3, name: "Product C", price: 300, isAvailable: true },
  ]);

  // Function to toggle availability
  const toggleAvailability = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, isAvailable: !product.isAvailable }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Product List</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>
            Availability: {product.isAvailable ? "In Stock" : "Out of Stock"}
          </p>
          <button
            onClick={() => toggleAvailability(product.id)}
            style={{
              padding: "5px 10px",
              backgroundColor: product.isAvailable ? "#f44336" : "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {product.isAvailable ? "Mark as Out of Stock" : "Mark as In Stock"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList33;

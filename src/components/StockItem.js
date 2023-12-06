import React from "react";
import PropTypes from "prop-types";
import { useState } from 'react';

function StockItem({ name, price, leftInStock, id }) {
  const [stockRemaining, setStockRemaining] = useState(leftInStock);
  const handleCartClick = () => {
    setStockRemaining(s => s - 1)
    // Define the action when the button is clicked
    console.log(`Cart button clicked for item ${id}`);
    // You can perform any action you want here
  };

  const handleUpdateClick = () => {
    console.log(`Update button clicked for item ${id}`);
  }

  return (
    <div>
      <p>{name} - {price}</p>
      <p>Stock Remaining: {stockRemaining}</p>
      <button onClick={handleCartClick}>Add to Cart</button>
      <button onClick={handleUpdateClick}>Update</button>
      <hr />
    </div>
  );
}

StockItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default StockItem;
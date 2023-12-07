import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItem({ name, price, imgSrc, leftInStock, update, id, addToCart }) {
  const [stockRemaining, setStockRemaining] = useState(leftInStock);

  const handleCartClick = () => {
    if (stockRemaining > 0) {
      setStockRemaining(s => s - 1);
      addToCart(name, price, id);
    } else {
    }
  };

  const handleUpdateClick = () => {
    update(id);
  };

  return (
    <div id="stockItem">
      <img src={imgSrc} alt={name} />
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
  id: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default StockItem;
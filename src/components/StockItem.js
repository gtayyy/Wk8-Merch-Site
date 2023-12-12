import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItem(props) {
  const { name, price, imgSrc, leftInStock, update, id, addToCart } = props;
  
  const [stockRemaining, setStockRemaining] = useState(leftInStock);

  const handleCartClick = () => {
    if (stockRemaining > 0) {
      setStockRemaining(s => s - 1);
      addToCart(props);
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
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  update: PropTypes.func,
  addToCart: PropTypes.func,
};

export default StockItem;
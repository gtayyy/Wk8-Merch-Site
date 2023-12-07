import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItem({ name, price, leftInStock, update, id, addToCart }) {
  const [stockRemaining, setStockRemaining] = useState(leftInStock);

  const handleCartClick = () => {
    if (stockRemaining > 0) {
      setStockRemaining(s => s - 1);
      addToCart(name, price, id);
      console.log(`Cart button clicked for item ${id}`);
    } else {
      console.log(`Item ${id} is out of stock.`);
    }
  };

  const handleUpdateClick = () => {
    console.log(`Update button clicked for item ${id}`);
    update(id);
  };

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
  id: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default StockItem;


// import React from "react";
// import PropTypes from "prop-types";
// import { useState } from 'react';

// function StockItem({ name, price, leftInStock, update, id, addToCart }) {
//   const [stockRemaining, setStockRemaining] = useState(leftInStock);
//   const handleCartClick = () => {
//     setStockRemaining(s => s - 1)
//     addToCart(name, price, id);
//     // Define the action when the button is clicked
//     console.log(`Cart button clicked for item ${id}`);
//     // You can perform any action you want here
//   };

//   const handleUpdateClick = () => {
//     console.log(`Update button clicked for item ${id}`);
//     update(id)

//   }

//   return (
//     <div>
//       <p>{name} - {price}</p>
//       <p>Stock Remaining: {stockRemaining}</p>
//       <button onClick={handleCartClick}>Add to Cart</button>
//       <button onClick={handleUpdateClick}>Update</button>
//       <hr />
//     </div>
//   );
// }

// StockItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   update: PropTypes.func.isRequired,
//   addToCart: PropTypes.func.isRequired, 
// };

// export default StockItem;
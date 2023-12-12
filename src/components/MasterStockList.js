import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function MasterStock(props){
  return (
    // line 10? itemsInStock or mainInventoryList?
    <React.Fragment>
      <hr/> 
      {Object.values(props.itemsInStock).map((item, index) =>
        <StockItem 
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          leftInStock={item.leftInStock}
          id={item.id}
          update={props.handleUpdate}
          addToCart={props.addToCart}
          key={index}/>
      )}
    </React.Fragment>
  );
}

MasterStock.propTypes = {
  masterStock: PropTypes.object
};

export default MasterStock;
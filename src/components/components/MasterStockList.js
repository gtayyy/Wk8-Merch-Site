import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function MasterStock(props){
  return (
    <React.Fragment>
      <hr/>
      {props.itemsInStock.map((item, index) =>
        <StockItem name={item.name}
          price={item.price}
          leftInStock={item.leftInStock}
          id={item.id}
          key={index}/>
      )}
    </React.Fragment>
  );
}

//   this.setState({mainTicketList: newMainTicketList,
//                 formVisibleOnPage: false });
// }

MasterStock.propTypes = {
  masterStock: PropTypes.array
};

export default MasterStock;
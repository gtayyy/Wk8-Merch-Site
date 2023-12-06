import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import MasterStock from "./MasterStockList";
import { v4 } from 'uuid';
// import UpdateInventoryForm from "./UpdateInventoryForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      mainInventoryList: [
        {
          name: 'Vinyl LP',
          price: '$30',
          leftInStock: '20',
          id: v4()
        },
        {
          name: 'T-shirt',
          price: '$15',
          leftInStock: '25',
          id: v4()
        },
        {
          name: 'Hoodie',
          price: '$45',
          leftInStock: '10',
          id: v4()
        }
      ]
    };
  }
  handleClick = () => {
    this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({
      mainInventoryList: newMainInventoryList, 
      formVisibleOnPage: false
    });
  } 
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to Storefront";
    } else {
      currentlyVisibleState = <MasterStock itemsInStock={this.state.mainInventoryList}/>;
      buttonText = "Add New Inventory";
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default InventoryControl;


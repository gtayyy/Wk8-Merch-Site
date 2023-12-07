// import React from "react";
// import NewInventoryForm from "./NewInventoryForm";
// import MasterStock from "./MasterStockList";
// import { v4 } from 'uuid';
// // import UpdateInventoryForm from "./UpdateInventoryForm";

// class InventoryControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false, 
//       mainInventoryList: [
//         {
//           name: 'Vinyl LP',
//           price: '$30',
//           leftInStock: '20',
//           id: v4()
//         },
//         {
//           name: 'T-shirt',
//           price: '$15',
//           leftInStock: '25',
//           id: v4()
//         },
//         {
//           name: 'Hoodie',
//           price: '$45',
//           leftInStock: '10',
//           id: v4()
//         }
//       ]
//     };
//   }
//   handleClick = () => {
//     this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}));
//   }
//   handleAddingNewInventoryToList = (newInventory) => {
//     const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
//     this.setState({
//       mainInventoryList: newMainInventoryList, 
//       formVisibleOnPage: false
//     });
//   } 
//   render(){
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
//       buttonText = "Return to Storefront";
//     } else {
//       currentlyVisibleState = <MasterStock itemsInStock={this.state.mainInventoryList}/>;
//       buttonText = "Add New Inventory";
      
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }

// }

// export default InventoryControl;

import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import MasterStock from "./MasterStockList";
import { v4 } from 'uuid';
import UpdateInventoryForm from "./UpdateInventoryForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addFormVisibleOnPage: false, 
      updateFormVisibleOnPage: false,
      cartVisibleOnPage: false,
      selectedId: null,
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

//THIS FUNCTION IS WHAT YOU'RE WORKING ON

  handleAddClick = () => {
    console.log(this.state.updateFormVisibleOnPage)
    if (this.state.updateFormVisibleOnPage === false) {
      this.setState(prevState =>({addFormVisibleOnPage: !prevState.addFormVisibleOnPage}));
    } else {
      this.setState(prevState =>({updateFormVisibleOnPage: !prevState.updateFormVisibleOnPage}));
    }
  }

  handleCartClick = () => {
    this.setState(prevState =>({cartVisibleOnPage: !prevState.cartVisibleOnPage}));
  }

  handleUpdateClick = (id) => {
    this.setState(prevState =>({updateFormVisibleOnPage: !prevState.UpdateFormVisibleOnPage}));
    this.setState ({selectedId: id});
  }



  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({
      mainInventoryList: newMainInventoryList, 
      addFormVisibleOnPage: false
    });
  } 
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let cartButtonText = null;
    if (this.state.addFormVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to Storefront";
    } else if (this.state.updateFormVisibleOnPage) {
      currentlyVisibleState = <UpdateInventoryForm onUpdateInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to Storefront";
    // } else if (this.state.cartVisibleOnPage) {
    //   currentlyVisibleState = <Cart />;
    //   buttonText = "Return to Storefront";
    //   cartButtonText = "Hide Cart"
    } else {
      currentlyVisibleState = <MasterStock handleUpdate={this.handleUpdateClick} itemsInStock={this.state.mainInventoryList}/>;
      buttonText = "Add New Inventory";
      cartButtonText = "View Cart"
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleAddClick}>{buttonText}</button>
        <button onClick={this.handleCartClick}>{cartButtonText}</button>
      </React.Fragment>
    );
  }

}

export default InventoryControl;
import React, { useLayoutEffect } from "react";
import NewInventoryForm from "./NewInventoryForm";
import MasterStock from "./MasterStockList";
import UpdateInventoryForm from "./UpdateInventoryForm";
import Cart from "./Cart";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    console.log('props', props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      addFormVisibleOnPage: false,
      updateFormVisibleOnPage: false,
      cartVisibleOnPage: false,
      selectedId: null,
    };
  }

  //THIS FUNCTION IS WHAT YOU'RE WORKING ON

  handleAddClick = () => {
    if (this.state.updateFormVisibleOnPage === false) {
      this.setState(prevState => ({ addFormVisibleOnPage: !prevState.addFormVisibleOnPage }));
    } else {
      this.setState(prevState => ({ updateFormVisibleOnPage: !prevState.updateFormVisibleOnPage }));
    }
  }

  handleCartClick = () => {
    this.setState(prevState => ({ cartVisibleOnPage: !prevState.cartVisibleOnPage }));
  }

  handleUpdateClick = (id) => {
    this.setState(prevState => ({
      updateFormVisibleOnPage: !prevState.updateFormVisibleOnPage,
      selectedId: id
    }));
  };

  handleAddingNewInventoryToList = (newInventory) => {
    const { dispatch } = this.props;
    const { name, price, leftInStock, id } = newInventory;
    const action = {
      type: "ADD_UPDATE_ITEM",
      name: name,
      price: price,
      leftInStock: leftInStock,
      id: id
    }
    dispatch(action);
    this.setState({
      addFormVisibleOnPage: false
    });
  };

  handleUpdatingInventory = (updatedInventory) => {
    const { dispatch } = this.props;
    const { name, price, leftInStock, id } = updatedInventory;
    const action = {
      type: 'ADD_UPDATE_ITEM',
      name: name,
      price: price,
      leftInStock: leftInStock,
      id: id,
    }
    dispatch(action);
    this.setState({
      updateFormVisibleOnPage: false
    });
  };

  addToCart = (itemToAdd) => {
    const { dispatch } = this.props;
    const { id, name, price, leftInStock } = itemToAdd;
    const action = {
      type: 'ADD_UPDATE_ITEM',
      name: name,
      price: price,
      leftInStock: leftInStock,
      id: id,
    }
    dispatch(action);
    this.setState({
      cartVisibleOnPage: false,
    });
  };

  removeFromCart = (itemId) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_ITEM",
      id: itemId
    }
    dispatch(action);
    this.setState({ cartVisibleOnPage: true });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let cartButtonText = null;
    if (this.state.addFormVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to Storefront";
    } else if (this.state.updateFormVisibleOnPage) {
      currentlyVisibleState = <UpdateInventoryForm onUpdateInventoryCreation={this.handleUpdatingInventory} />;
      buttonText = "Return to Storefront";
    } else if (this.state.cartVisibleOnPage) {
      cartButtonText = "Return to Storefront"
      currentlyVisibleState = (
        <>
          <Cart
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
          />
          <button onClick={this.handleCartClick} > {cartButtonText}</button>
        </>)
    } else {
      buttonText = "Add New Inventory";
      cartButtonText = "View Cart"
      currentlyVisibleState = (
        <>
          <MasterStock
            addToCart={this.addToCart}
            handleUpdate={this.handleUpdateClick}
            itemsInStock={this.props.mainInventoryList}
          />
          <div className="centerButtons">
            <button onClick={this.handleAddClick}>{buttonText}</button>
            <button onClick={this.handleCartClick}>{cartButtonText}</button>
          </div>
        </>)


    }
    return (
      <React.Fragment>
        {currentlyVisibleState}

      </React.Fragment>
    );
  }

}

InventoryControl.propTypes = {
  mainInventoryList: PropTypes.object,
  cartItems: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    mainInventoryList: state, //why set inv not showing?
    cartItems: state //?? ok to have 2 state values?
  }
}

InventoryControl = connect(mapStateToProps)(InventoryControl);

export default InventoryControl;
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function UpdateInventoryForm(props) {
  function handleUpdateInventoryFormSubmission(e) {
    e.preventDefault();
    props.onUpdateInventoryCreation({
      name: e.target.name.value,
      price: e.target.price.value,
      leftInStock: e.target.leftInStock.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleUpdateInventoryFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Update Item Name' />
        <input
          type='text'
          name='price'
          placeholder='Update Price' />
        <input
          type='text'
          name="leftInStock"
          placeholder='Update Inventory' />
        <button type='submit'>Update Item</button>
      </form>
    </React.Fragment>
  );
}

UpdateInventoryForm.propTypes = {
  onUpdateInventoryCreation: PropTypes.func
};

export default UpdateInventoryForm;
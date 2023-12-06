import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewInventoryForm(props) {
  function handleNewInventoryFormSubmission(e) {
    e.preventDefault();
    // console.log(e.target.names.value);
    // console.log(e.target.location.value);
    // console.log(e.target.issue.value);
    props.onNewInventoryCreation({  //props, not this. b/c func comp not class comp.
      name: e.target.name.value,
      price: e.target.price.value,
      leftInStock: e.target.leftInStock.value,
      id: v4() //create unique ID thru uuid
      //numberOfStudents: parseInt(e.target.numberOfStudents.value) //to get # from form
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewInventoryFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='New Item Name' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name="leftInStock"
          placeholder='Starting Inventory' />
        <button type='submit'>Add to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;
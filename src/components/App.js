import React from "react";
import Header from "./Header";
import InventoryControl from "./InventoryControl";
import "../CSS/App.css"
import "../CSS/Header.css"

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <InventoryControl />
    </React.Fragment>
  );
}

export default App;

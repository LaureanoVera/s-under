import "./App.css";
import "./bootstrap.min.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Welcome!" />
    </div>
  );
}

export default App;

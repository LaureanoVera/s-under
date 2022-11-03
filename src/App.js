import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("Laureano");
  return (
    <div className="App">
      <Header />;
      <Body name={name} setName={setName} />;
    </div>
  );
}

export default App;

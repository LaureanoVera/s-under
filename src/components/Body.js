import React from "react";

const Body = ({ name, setName }) => {
  return (
    <div>
      {name}
      <button onClick={() => setName("Ivan")}>Cambiar Nombre</button>
    </div>
  );
};

export default Body;

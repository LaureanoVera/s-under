import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <ul className="ItemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ItemList;

// esa blanca trae cosas raras pa quemar
// su chico esperando que ella lo vuelva a llamar
// cada que se arrodilla parece que va a rezar
// yo no quiero zorras chica correte pa un lao
// quiero tantos fajos que no me de pa contar
// no me va lo de gansta nena quiero mucho mas

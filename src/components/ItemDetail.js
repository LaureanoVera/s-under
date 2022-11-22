import React from "react";

const ItemDetail = ({ item }) => {
  const { name, description, stock, img } = item;

  return (
    <div>
      <div>{name.toUpperCase()}</div>
      <img src={img} alt={name} />
      <div>
        <p>{description}</p>
        <p>Stock: {stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

// mock
import { productos } from "../mocks/item.mock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => resolve(productos[id - 1]), 1000)
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

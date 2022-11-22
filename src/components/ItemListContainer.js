import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

// mock
import { productos } from "../mocks/item.mock";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(productos);
      }, 1000)
    ).then((data) => {
      if (category) {
        const categories = productos.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

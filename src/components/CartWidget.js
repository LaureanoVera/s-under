import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <Button variant="outline-dark">
      <FontAwesomeIcon icon={faCartShopping} />
    </Button>
  );
};

export default CartWidget;

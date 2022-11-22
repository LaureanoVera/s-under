import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, img, name, description } = product;

  return (
    <li style={{ width: "18rem" }}>
      <Link to={`/item/${id}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Link>
    </li>
  );
};

export default Item;

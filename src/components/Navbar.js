import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as NavbarChild } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

function BasicExample() {
  return (
    <NavbarChild bg="light" expand="lg">
      <Container>
        <NavbarChild.Brand href="#home">S-Under</NavbarChild.Brand>
        <NavbarChild.Toggle aria-controls="basic-Navbar-nav" />
        <NavbarChild.Collapse id="basic-Navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blacks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Whites</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarChild.Collapse>
        <CartWidget />
      </Container>
    </NavbarChild>
  );
}

export default BasicExample;

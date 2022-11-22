import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as NavbarChild } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <NavbarChild bg="light" expand="lg">
      <Container>
        <Link to="/">S-Under</Link>
        <NavbarChild.Toggle aria-controls="basic-Navbar-nav" />
        <NavbarChild.Collapse id="basic-Navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Link to="/category/blacks">Blacks</Link>
              <NavDropdown.Divider />
              <Link to="/category/whites">Whites</Link>
            </NavDropdown>
          </Nav>
        </NavbarChild.Collapse>
        <CartWidget />
      </Container>
    </NavbarChild>
  );
}

export default Navbar;

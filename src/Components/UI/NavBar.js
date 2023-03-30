import {Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../CartButton/CartButton";

const NavBar = (props) => {
  return (
    <Navbar
    fixed="top"
      bg="dark"
      expand="lg"
      variant="dark"
      style={{ fontFamily: "didot", fontSize: "1.5rem", fontColor: "white"}}
    >
      <Container>
        <Navbar.Brand />
        <Nav className="ms-5">
          <Nav.Item>
            <Nav.Link className="me-5 ms-2" active style={{ fontColor: "red" }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="me-5 ms-2" style={{ fontColor: "#E1D9D1" }}>
              Store
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="me-5 ms-2" style={{ fontColor: "#E1D9D1" }}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <CartButton />
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;

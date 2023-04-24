import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton/CartButton";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      expand="lg"
      variant="dark"
      style={{ fontFamily: "didot", fontSize: "1.5rem", fontColor: "white" }}
    >
      <Container>
        <Navbar.Brand />
        <Nav className="ms-5">
          <LinkContainer to="/">
            <Nav.Link className="me-5 ms-2">Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Store">
            <Nav.Link className="me-5 ms-2">Store</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/About">
            <Nav.Link className="me-5 ms-2">About</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/ContactUs">
            <Nav.Link className="me-5 ms-2" to>
              Contact Us
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <CartButton onClick={props.cartButtonClick} />
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;

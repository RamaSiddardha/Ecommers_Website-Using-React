import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CartButton from "../Cart/CartButton/CartButton";
// import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

const NavBar = (props) => {
  const authCtx = useContext(AuthContext);

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
          <LinkContainer to="/Login">
            <Nav.Link className="ms-5">
              {authCtx.isLoggedIn ? (
                <Button onClick={authCtx.logout}>Logout</Button>
              ) : (
                "Login"
              )}
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;

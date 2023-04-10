import {Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton/CartButton";
import { NavLink } from "react-router-dom";

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
            <Nav.Link className="me-5 ms-2">
            <NavLink style={{textDecoration : 'none', color : 'white'}} to='/'>Home</NavLink> 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
         <Nav.Link className="me-5 ms-2" >
         <NavLink style={{textDecoration : 'none', color : 'white'}} to='/Store'> Store</NavLink> 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="me-5 ms-2">
            <NavLink style={{textDecoration : 'none', color : 'white'}} to='/About'>About</NavLink> 
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <CartButton onClick={props.cartButtonClick}/>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;

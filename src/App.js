import { Row } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/ProductsCard/Products";
import CartModal from "./Components/CartButton/CartModal";
import { useState } from "react";

function App() {

 const [show,setShow] = useState(false)

 const cartModelHandler =()=>{
setShow(!show)
 }

  return (
    <>
      <CartModal show={show} onHide={cartModelHandler}/>
      <Header  cartButtonClick={cartModelHandler}/>
      <Row xs={1} md={2} className="g-4">
      <Products/>
      </Row>
    </>
  );
}

export default App;

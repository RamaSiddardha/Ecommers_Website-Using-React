import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/ProductsCard/Products";
import CartModal from "./Components/CartButton/CartModal";
import { useState } from "react";
import Cartprovider from "./Contexts/CartContextProvider";

function App() {

 const [show,setShow] = useState(false)

 const cartModelHandler =()=>{
setShow(!show)
 }

  return (
    <Cartprovider>
      <CartModal show={show} onHide={cartModelHandler}/>
      <Header  cartButtonClick={cartModelHandler}/>
      
      <Products/>
 
    </Cartprovider>
  );
}

export default App;

import { useState } from "react";
import BrandCard from "../UI/BrandCard";
import NavBar from "../UI/NavBar";
import CartModal from "../Cart/CartButton/CartModal";

const Header = (props) => {
  const [show,setShow] = useState(false)

 const cartModelHandler =()=>{
setShow(!show)
 }
  return (
    <>
    <CartModal show={show} onHide={cartModelHandler}/>
      <NavBar show={props.show} cartButtonClick={cartModelHandler}/>
      <BrandCard/>
    </>
  );
};

export default Header;

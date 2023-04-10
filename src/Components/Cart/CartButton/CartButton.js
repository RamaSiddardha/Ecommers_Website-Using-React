import { Badge, Button } from "react-bootstrap";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import { useContext } from "react";
import CartContext from "../../../Contexts/CartContext";

const CartButton = (props) => {

  const cartCtx = useContext(CartContext)

  const noOfCartItems = cartCtx.items.length

  return (
    <>
      <Button
        style={{ display: "flex" }}
        variant="primary"
        className="cart-btn btn-lg"
        onClick={props.onClick}
      >
        Cart
        <span className={classes.span}>
          <CartIcon />
        </span>
        <Badge className="ms-1" bg="secondary">
        {noOfCartItems}
        </Badge>
      </Button>
    </>
  );
};

export default CartButton;

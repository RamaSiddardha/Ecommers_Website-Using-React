import { Badge, Button } from "react-bootstrap";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
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
          0
        </Badge>
      </Button>
    </>
  );
};

export default CartButton;

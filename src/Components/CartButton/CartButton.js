import { Badge, Button } from "react-bootstrap";

const CartButton = (props) => {
  return (
    <>
      <Button variant="primary"  className="cart-btn btn-lg">
        Cart
        <Badge className="ms-2" bg="secondary">0</Badge>
      </Button>
    </>
  );
};

export default CartButton;

import { Button, Container, Modal, Table } from "react-bootstrap";
import "./CartModal.css";
import { useContext } from "react";
import CartContext from "../../../Contexts/CartContext";
import CartItems from "./CartItems";

const CartModal = (props) => {

  const cartCtx = useContext(CartContext)

    return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Title className="ms-3" id="contained-modal-title-vcenter">
        <Button onClick={props.onHide} className="m-0" variant="light">
          <img
            src="https://www.i2symbol.com/images/text-symbols/arrow-symbol.png" alt="Button"
            height="50rem"
          />
        </Button>{" "}
        <h2>Cart</h2>
      </Modal.Title>
      <Modal.Body className="show-grid">
        <Container>
          <Table responsive>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <CartItems/>
            
          </Table>
        </Container>
      <Modal.Footer>
      <h5>Total Amount</h5>
        <h6>${cartCtx.totalAmount}</h6>
        <Button variant="success" >Place Order</Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
        
      </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;

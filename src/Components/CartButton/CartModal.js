import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./CartModal.css";

const CartModal = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
    <Modal
      // backdrop={false}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      {/* <Modal.Dialog> */}
      <Modal.Title  className="ms-3"id="contained-modal-title-vcenter">
      <Button onClick={props.onHide} className="m-0" variant="light"><img src="https://www.i2symbol.com/images/text-symbols/arrow-symbol.png" height='50rem'/></Button> <h2>Cart</h2>
      </Modal.Title>
      <Modal.Body className="show-grid">
        <Container>
          <h4>
            <thead>
              <Row>
                <Col md={8}>Item</Col>
                <Col md={2}>Price</Col>
                <Col className="ms-4" md={1}>
                  Quantity
                </Col>
              </Row>
            </thead>
          </h4>
          {cartElements.map((item) => (
            <Row className="mb-5">
              <Col xs={6} md={6}>
                <img src={item.imageUrl} alt="Item" height="100px" />
                {item.title}
              </Col>
              <Col xs={6} md={3}>
                {item.price}
              </Col>
              <Col  xs={6} md={3}>
                {item.quantity}
              </Col>
            </Row>
          ))}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      {/* </Modal.Dialog> */}
    </Modal>
  );
};

export default CartModal;

import { Button, Card, CardGroup } from "react-bootstrap";
import "./ProductsCard.css";

const ProductsCard = (props) => {
  return (
    <>
      <CardGroup  className="m5">
        <Card>
          <Card.Body>
            <Card.Title>
              <h4>{props.name}</h4>
            </Card.Title>
            <Card.Img src={props.link} />
          </Card.Body>
          <Card.Footer>
            <h6>${props.price}</h6>
            <Button>Add to Cart</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default ProductsCard;

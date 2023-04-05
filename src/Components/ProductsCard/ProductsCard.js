import { Button, Card, CardGroup } from "react-bootstrap";
import classes from "./ProductsCard.module.css";

const ProductsCard = (props) => {
  return (
    <>
      <Card className="border-0">
        <Card.Body className={classes.card}>
          <Card.Title className={classes.title}>
            <h4>{props.name}</h4>
          </Card.Title>
          <Card.Img src={props.link} />
          <span className={classes.footer}>
            <h4>${props.price}</h4>
            <Button>Add to Cart</Button>
          </span>
        </Card.Body>
        {/* <Card.Footer className={classes.footer}>
            <h6>${props.price}</h6>
            <Button>Add to Cart</Button>
          </Card.Footer> */}
      </Card>
    </>
  );
};

export default ProductsCard;

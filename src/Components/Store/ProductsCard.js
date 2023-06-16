import { Button, Card } from "react-bootstrap";
import classes from "./ProductsCard.module.css";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCart = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      link: props.link,
      price: props.price,
    });

    // console.log(props)
    
  };
  return (
    <>
      <Card className="border-0">
        <Card.Body className={classes.card}>
          <Link
            style={{ color: "rgb(33,37,41)", textDecoration: "none" }}
            to={props.id}
          >
            <Card.Title className={classes.title}>
              <h4>{props.name}</h4>
            </Card.Title>
            <Card.Img src={props.link} />
          </Link>
          <span className={classes.footer}>
            <h4>${props.price}</h4>
            <Button onClick={addToCart}>Add to Cart</Button>
          </span>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductsCard;

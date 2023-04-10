import ProductsCard from "./ProductsCard";
import classes from "./Products.module.css";
import { Row } from "react-bootstrap";

const Products = (props) => {
  const productsArr = [
    {
      id : 'i1',
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id : 'i2',
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id : 'i3',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id : 'i4',
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <Row xs={1} md={2} className="g-4">
      <span className={classes.span}>
        {productsArr.map((product) => {
          return (
            <ProductsCard
            key = {product.id}
              id ={product.id}
              name={product.title}
              link={product.imageUrl}
              price={product.price}
            />
          );
        })}
      </span>
    </Row>
  );
};

export default Products;

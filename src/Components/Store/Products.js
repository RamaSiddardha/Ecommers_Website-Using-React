import ProductsCard from "./ProductsCard";
import classes from "./Products.module.css";
import { Row } from "react-bootstrap";
import { useCallback, useEffect,useState } from "react";

const Products = (props) => {
  const [productsArr, setProducts] = useState([])

const produts = useCallback( async ()=>{
const response = await fetch("https://react-ecommers-website-2023-default-rtdb.firebaseio.com/products.json")
const data = await response.json()
const fetechProducts = [];
      for (const key in data) {
        fetechProducts.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          imageUrl: data[key].imageUrl,
        });
      }


      setProducts(fetechProducts)
},[])

useEffect(() => {
  produts();
}, [produts]);

  return (
    <Row xs={1} md={2} className="g-4">
      <span className={classes.span}>
        {productsArr.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              id={product.id}
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

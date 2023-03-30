import { Row } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import ProductsCard from "./Components/ProductsCard/ProductsCard";

function App() {

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Header />
      <Row xs={1} md={2} className="g-4">
      {productsArr.map(product =>{
       return  <ProductsCard name={product.title} link={product.imageUrl} price={product.price}/>
      })}
      </Row>
    </>
  );
}

export default App;

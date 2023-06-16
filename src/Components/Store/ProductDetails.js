import { useParams } from "react-router-dom"
import { useCallback, useContext, useEffect,useState } from "react";
import classes from "./ProductsCard.module.css";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../Contexts/CartContext";

const ProductDetails=()=>{
    const [props, setProducts] = useState({})
    const cartCtx = useContext(CartContext);
    const params = useParams()
    const addToCart = () => {
        cartCtx.addItem({
            id: params.productId,
            name: props.name,
            link: props.imageUrl,
            price: props.price,
        });


        console.log(props)
       
    }
    
    const fetctingProduct = useCallback( async ()=>{
        const response = await fetch(`https://react-ecommers-website-2023-default-rtdb.firebaseio.com/products/${params.productId}.json`)
        const data = await response.json()
        setProducts(data)
        
        
    },[params.productId])
    
        useEffect(() => {
            fetctingProduct();
        }, [fetctingProduct]);
    return <>
    <>
      <Card className="border-0">
        <Card.Body className={classes.card}>
            <Card.Title className={classes.title}>
              <h4>{props.title}</h4>
            </Card.Title>
            <Card.Img src={props.imageUrl} />
          <span className={classes.footer}>
            <h4>${props.price}</h4>
            <Button  onClick={addToCart} >Add to Cart</Button>
          </span>
        </Card.Body>
      </Card>
    </>
    </>
   
}

export default ProductDetails

// export const LoderData =async ()=>{
   
//     const response = await fetch(`https://react-ecommers-website-2023-default-rtdb.firebaseio.com/products/${params.productId}.json`)
//     const data = await response.json()
//     return data

// }
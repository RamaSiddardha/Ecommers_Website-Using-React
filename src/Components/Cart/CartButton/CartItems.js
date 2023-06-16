import { Button } from "react-bootstrap";
import CartContext from "../../../Contexts/CartContext";
import { useContext } from "react";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      {cartCtx.items.map((item) => (
        <tbody key={item.id}>
          <tr>
            <td>
              <img src={item.link} alt="Item" height="100px" />
              <div>{item.title}</div>
            </td>
            <td>{item.price}</td>
            <td>
              <input 
                type="number"
                defaultValue='1'
                style={{ width: "4rem" }}
              />
              <Button className="ms-2" variant="warning">
                Remove
              </Button>
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default CartItems;

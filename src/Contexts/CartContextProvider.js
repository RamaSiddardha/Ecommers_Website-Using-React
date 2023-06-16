// import { Alert } from "react-bootstrap";
// import AuthContext from "./AuthContext";
import CartContext from "./CartContext";
import React, { useReducer } from "react";


// const authCtx = useContext(AuthContext)
//   let emailIdInput 

//   if(authCtx.email) emailIdInput =authCtx.email.replace("@","")

  const defaultCartState = {
    items:[],
    // emailIdInput ?fetch("https://crudcrud.com/Dashboard/7d0b88cb7d48492ea42f9f251591dd08/"+ emailIdInput):
    totalAmount: 0,
  };
  
  const cartReducer = (state, action) => {
    
    if (action.type === "ADD ITEM") {
      const updatedTotalAmount = state.totalAmount + action.item.price;
  
      const existingItemId = state.items.findIndex(
        (item) => item.id === action.item.id
      );
  
      const existingItem = state.items[existingItemId];
      let updatedItems;
  
      if (!existingItem) {
        updatedItems =  
        // fetch("https://crudcrud.com/Dashboard/7d0b88cb7d48492ea42f9f251591dd08/"+ emailIdInput,{
        //     method: "POST",
        //     body: JSON.stringify({...action.item}),
        //     headers: { "Content-Type": "application/json" },
        //   })
        
        state.items.concat(action.item);
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      if (existingItem) {
        alert('Item Already Exists')
        return {
          items: state.items,
          totalAmount: state.totalAmount,
        };
      }
    }
    return {
      items: state.items,
      totalAmount: state.totalAmount,
    };
  };





const Cartprovider = (props) => {

  
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  const addItemtoCartHandler = (item) => {
    cartDispatch({ type: "ADD ITEM", item: item });
  };

  const removeItemFromCarthandler = (id) => {};

  const CartContent = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCarthandler,
  };

  return (
    <CartContext.Provider value={CartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;

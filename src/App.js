import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Store/Products";
import CartModal from "./Components/Cart/CartButton/CartModal";
import { useState } from "react";
import Cartprovider from "./Contexts/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/About/About";


const Router = createBrowserRouter([
  {
    path : '/', element: <RootLayout/> , children : [
      {path :'/Store' , element : <Products/>},
      {path : '/About' , element : <About/>}
    ]
  }
])

function App() {


  return (
    <Cartprovider>
      <RouterProvider router={Router}/>
 
    </Cartprovider>
  );
}

export default App;

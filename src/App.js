import "./App.css";
import Products from "./Components/Store/Products";
import Cartprovider from "./Contexts/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/About/About";
import HomePage from "./Components/Home/HomePage";
import ContactUs from "./Components/Contact Us Page/ContactUs";
import ProductDetails from "./Components/Store/ProductDetails";
import RegistrationForm from "./Components/RegistrationPage/RegistrationForm";
import { useContext } from "react";
import AuthContext from "./Contexts/AuthContext";
// import { LoderData as fetchproduct } from "./Components/Store/ProductDetails";

// ,loader :fetchproduct




function App() {
  const authCtx = useContext(AuthContext)

  const Router = createBrowserRouter([
    {
      path : '/', element: <RootLayout/> , children : [
        {index : true,element : <HomePage/>},
        {path :'/Store' , element : authCtx.isLoggedIn ?<Products/>: <RegistrationForm/> },
        {path : '/Store/:productId', element :  authCtx.isLoggedIn ?<ProductDetails/> : <RegistrationForm/> },
        {path : '/About' , element : <About/>},
        {path : '/Login', element : <RegistrationForm/>},
        {path : '/ContactUs', element : <ContactUs/>},
      ]
    }
  ])


  return (
    <Cartprovider>
      <RouterProvider router={Router}/>
 
    </Cartprovider>
  );
}

export default App;

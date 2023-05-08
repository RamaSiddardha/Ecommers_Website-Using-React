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
// import { LoderData as fetchproduct } from "./Components/Store/ProductDetails";

// ,loader :fetchproduct


const Router = createBrowserRouter([
  {
    path : '/', element: <RootLayout/> , children : [
      {index : true,element : <HomePage/>},
      {path :'/Store' , element : <Products/> },
      {path : '/About' , element : <About/>},
      {path : '/ContactUs', element : <ContactUs/>},
      {path : '/Store/:productId', element : <ProductDetails/>},
      {path : '/Login', element : <RegistrationForm/>}
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

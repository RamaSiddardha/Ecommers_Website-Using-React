import "./App.css";
import Products from "./Components/Store/Products";
import Cartprovider from "./Contexts/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/About/About";
import HomePage from "./Components/Home/HomePage";
import ContactUs from "./Components/Contact Us Page/ContactUs";


const Router = createBrowserRouter([
  {
    path : '/', element: <RootLayout/> , children : [
      {path :'/Store' , element : <Products/>},
      {path : '/About' , element : <About/>},
      {path : '/',element : <HomePage/>},
      {path : '/ContactUs', element : <ContactUs/>}
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

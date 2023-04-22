import "./App.css";
import Products from "./Components/Store/Products";
import Cartprovider from "./Contexts/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/About/About";
import HomePage from "./Components/Home/HomePage";


const Router = createBrowserRouter([
  {
    path : '/', element: <RootLayout/> , children : [
      {path :'/Store' , element : <Products/>},
      {path : '/About' , element : <About/>},
      {path : '/',element : <HomePage/>}
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

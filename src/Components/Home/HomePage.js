import HomeContextProvider from "../../Contexts/HomeContextprovider";
import Home from "./Home";

const HomePage = (props) => {
  return(
  <HomeContextProvider>
    <Home/>
  </HomeContextProvider>
  )
};

export default HomePage
import BrandCard from "../UI/BrandCard";
import NavBar from "../UI/NavBar";

const Header = (props) => {
  return (
    <>
      <NavBar show={props.show} cartButtonClick={props.cartButtonClick}/>
      <BrandCard/>
    </>
  );
};

export default Header;

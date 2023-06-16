import { createContext, useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email : ''
});

export const AuthContextProvider = (props) => {

  const storedToken = localStorage.getItem('token')

  const [Email,setEmail] = useState()

  const [token, setToken] = useState(storedToken);

  const userLoggedIn = !!token;

  const loginHandler = (token,emailId) => {
    setToken(token);
    localStorage.setItem('token',token)
    // console.log(emailId)
    setEmail(emailId)
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token')

  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email : Email
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

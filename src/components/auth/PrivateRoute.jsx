import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Register from "../../pages/register/Register";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return <div>{user ? children : <Register to="/auth/register" />}</div>;
};

export default PrivateRoute;

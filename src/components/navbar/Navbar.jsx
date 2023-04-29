import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Irish Airways</span>
        </Link>
        {user ? 
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 className="username_txt">Hello, {user.username}</h1>
            <button className="navButton" onClick={handleClick}>Logout</button>
          </div>
         : (
          <div className="navItems">
            <button className="navButton"><Link to={"/register"}>Register</Link></button>
            <button className="navButton"><Link to={"/login"}>Login</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

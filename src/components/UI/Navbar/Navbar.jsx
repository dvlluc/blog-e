import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, logOut } = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
      {isAuth && (
        <div className={classes.navbar__content}>
          <MyButton onClick={() => logOut()}>Выйти</MyButton>
          <div className={classes.navbar__links}>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

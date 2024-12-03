import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser, setUser } from "../reducers/userSlice";
import DnsIcon from "@mui/icons-material/Dns";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.count,
    0
  );
  const loggedInUser = useSelector((state) => state.user);
  console.log(loggedInUser, "loggewd");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/png/logo-no-background.png" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Tour/Trav
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Badge badgeContent={cartItemCount} color="primary">
                  <Link to="/cart" className="nav-link">
                    <ShoppingCartIcon />
                  </Link>
                </Badge>
              </li>
              <li className="nav-item">
                <Link to="/detail" className="nav-link">
                  <DnsIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  <NewspaperIcon />
                </Link>
              </li>
              {loggedInUser ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AccountCircleIcon />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="d-flex justify-content-evenly nav-link">
                      <Link to="/">Welcome, {loggedInUser.user?.name}</Link>
                    </li>
                    {/* <li><a className="dropdown-item" href="#">Welcome, {loggedInUser.name}</a></li> */}
                    <li className="d-flex justify-content-evenly">
                      <Link to="/forgotPassword">
                        <Button>Reset Password</Button>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="d-flex justify-content-evenly">
                      <Button onClick={handleLogout}>Log out</Button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login/Signup <LoginIcon sx={{ fontSize: 20 }} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

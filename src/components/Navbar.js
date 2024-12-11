import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import DnsIcon from "@mui/icons-material/Dns";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser, setUser } from "../slices/userSlice";
import { get } from "utils/lodash";
import { handleLogout } from "utils/handleLogout";
const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items || []);
  // const cartItems = [];
  const cartItemCount = cartItems.reduce(
    (count, item) => count + (item.count || 0),
    0
  );
  // const loggedInUser = useSelector((state) => state);
  const { user } = useSelector(
    (state) => ({
      user: get(state, "LoginSlice.user", []),
    }),
    shallowEqual
  );

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const navLinks = [
    { label: "Home", link: "/" },
    { label: "Tour/Trav", link: "/products" },
    { label: "About Us", link: "/aboutus" },
    { label: "Contact Us", link: "/contactus" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          <img
            src="/png/logo-no-background.png"
            alt="Logo"
            style={{ height: "40px", verticalAlign: "middle" }}
          />
        </Typography>
        <Badge badgeContent={cartItemCount} color="secondary">
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
          </IconButton>
        </Badge>
        <IconButton color="inherit" component={Link} to="/detail">
          <DnsIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/news">
          <NewspaperIcon />
        </IconButton>
        {user.name ? (
          <>
            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
              aria-controls="user-menu"
              aria-haspopup="true"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="user-menu"
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem>Welcome, {user.name}</MenuItem>
              <MenuItem component={Link} to="/forgotPassword">
                Reset Password
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            color="inherit"
            startIcon={<LoginIcon />}
            component={Link}
            to="/login"
          >
            Login/Signup
          </Button>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((navLink) => (
            <ListItem
              key={navLink.label}
              sx={{ color: "black" }}
              component={Link}
              to={navLink.link}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={navLink.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

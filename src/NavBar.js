import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import HistoryDrawer from "./HistoryDrawer";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            component={Link}
            to="/"
            selected={location.pathname === "/"}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/blog"
            selected={location.pathname === "/blog"}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/team"
            selected={location.pathname === "/team"}
          >
            Team
          </Button>
          <Button
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            History
          </Button>
        </Toolbar>
      </AppBar>
      <HistoryDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
    </React.Fragment>
  );
};

export default NavBar;
import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const HistoryDrawer = ({ openDrawer, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      <List>
        <ListItemButton>
          <ListItemText primary="Version 1" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Version 2" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Version 3" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default HistoryDrawer;
"use client";

import { Drawer, List, ListItemButton } from "@mui/material";
import Link from "next/link";
import { useSupabase } from "./SupabaseProvider";

export const drawerWidth = 240;

const AppDrawer = () => {
  const context = useSupabase();

  const isLoggedIn = context?.session !== null;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItemButton component={Link} href="/">
          Home
        </ListItemButton>
        <ListItemButton component={Link} href="/about">
          About
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default AppDrawer;

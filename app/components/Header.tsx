"use client";

import { AppBar } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { drawerWidth } from "./Drawer";
import Logout from "./Logout";
import { useSupabase } from "./SupabaseProvider";

const useStyles = makeStyles()((theme) => ({
  appBar: {
    height: theme.spacing(7),
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const Header = () => {
  const { classes } = useStyles();
  const context = useSupabase();

  const isLoggedIn = context?.session !== null;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Logout />
    </AppBar>
  );
};

export default Header;

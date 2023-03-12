"use client";

import { AppBar, styled } from "@mui/material";
import { drawerWidth } from "./Drawer";
import Logout from "./Logout";
import { useSupabase } from "./SupabaseProvider";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: theme.spacing(7),
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
}));

const Header = () => {
  const context = useSupabase();

  const isLoggedIn = context?.session !== null;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <StyledAppBar position="sticky">
      <Logout />
    </StyledAppBar>
  );
};

export default Header;

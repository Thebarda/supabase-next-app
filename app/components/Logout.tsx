"use client";

import { Button } from "@mui/material";
import { useSupabase } from "./SupabaseProvider";

const Logout = () => {
  const context = useSupabase();

  const logout = async () => {
    await context?.supabase?.auth.signOut();
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default Logout;

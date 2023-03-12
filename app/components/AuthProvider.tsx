"use client";

import { useSupabase } from "./SupabaseProvider";

const AuthProvider = ({ children }) => {
  const context = useSupabase();

  if (context && !context.session) {
    window.location.href = "/authentication";

    return null;
  }

  return children;
};

export default AuthProvider;

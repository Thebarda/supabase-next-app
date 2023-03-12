"use client";

import React from "react";
import { useSupabase } from "./SupabaseProvider";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null => {
  const context = useSupabase();

  if (context && !context.session) {
    window.location.href = "/authentication";

    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;

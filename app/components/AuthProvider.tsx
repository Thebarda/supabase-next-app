"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useSupabase } from "./SupabaseProvider";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null => {
  const context = useSupabase();
  const router = useRouter();

  if (context && !context.session) {
    router.push("/authentication");

    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;

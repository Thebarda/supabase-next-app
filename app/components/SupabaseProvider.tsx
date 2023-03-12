"use client";

import { Session, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "../lib/supabase-browser";

const Context = createContext<
  { supabase: SupabaseClient; session: Session | null } | undefined
>(undefined);

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

export default function SupabaseProvider({ children, session }: Props) {
  const [supabase] = useState(() => createClient());
  const [currentSession, setSession] = useState(session);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (newSession !== currentSession) {
        setSession(newSession);
      }

      if (event === "SIGNED_IN") {
        window.location.href = "/";

        return;
      }

      if (event === "SIGNED_OUT") {
        window.location.href = "/authentication";
      }
    });

    return () => subscription.unsubscribe();
  }, [currentSession]);

  return (
    <Context.Provider value={{ supabase, session }}>
      {children}
    </Context.Provider>
  );
}

export const useSupabase = () => useContext(Context);

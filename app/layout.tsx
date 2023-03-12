import "server-only";
import AppDrawer from "./components/Drawer";
import Header from "./components/Header";
import Provider from "./components/Provider";

import SupabaseProvider from "./components/SupabaseProvider";
import { drawerWidth } from "./lib/constants";
import { createClient } from "./lib/supabase-server";

export const revalidate = 0;

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <SupabaseProvider session={session}>
          <Provider>
            <Header />
            <AppDrawer />
            <div
              style={{
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                height: "100%",
              }}
            >
              {children}
            </div>
          </Provider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

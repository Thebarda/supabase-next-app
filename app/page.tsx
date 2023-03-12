import AuthProvider from "./components/AuthProvider";
import Products from "./components/Products";
import { createClient } from "./lib/supabase-server";
import { Product } from "./models";

async function Page() {
  const supabase = createClient();
  const { data: products } = await supabase.from("products").select("*");

  return (
    <AuthProvider>
      <Products products={products as Array<Product>} />
    </AuthProvider>
  );
}

export default Page;

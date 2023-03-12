import Products from "./components/Products";
import { createClient } from "./lib/supabase-server";

async function Page() {
  const supabase = createClient();
  const { data: products } = await supabase.from("products").select("*");

  return <Products products={products} />;
}

export default Page;

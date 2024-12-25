import { createClient } from "@/src/utils/supabase/server";

async function Orders() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: orders, error } = await supabase
    .from("orders")
    .select("product_id, created_at, description, price")
    .eq("user_id", user?.id);

  return (
    <section className="h-full bg-gradient-to-tr py-12 from-emerald-500 to-emerald-200 dark:from-zinc-800 dark:to-zinc-800">
      <div className="flex justify-center">
        <div className="bg-white dark:bg-zinc-900 w-full md:w-[50%] flex flex-col gap-4 pt-8 justify-center text-center rounded-md">
          <h2 className="text-zinc-500 dark:text-zinc-50 text-4xl">
            Order History
          </h2>
          <table className="table-auto">
            {/* Table Heading Row */}
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Order Created</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            {/* Table Content Rows */}
            <tbody>
              {orders &&
                orders.map((order) => {
                  return (
                    <tr className="bg-[#f2f2f2]">
                      <td>{order.product_id}</td>
                      <td>{order.created_at}</td>
                      <td>$ {order.price / 100}</td>
                      <td>{order.description}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Orders;

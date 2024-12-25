import Link from "next/link";
import { createClient } from "@/src/utils/supabase/server";
import dayjs from "dayjs";

interface OrdersProps {
  params: {
    locale: "en" | "ka";
  };
}

async function Orders({ params }: OrdersProps) {
  const { locale } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: orders, error } = await supabase
    .from("orders")
    .select("product_id, created_at, description, price")
    .eq("user_id", user?.id);

  if (error) {
    return (
      <section className="h-full bg-gradient-to-tr py-12 from-emerald-500 to-emerald-200 dark:from-zinc-800 dark:to-zinc-800">
        <div className="flex justify-center">
          <div className="bg-white dark:bg-zinc-900 w-full md:w-[50%] flex flex-col gap-4 pt-8 justify-center text-center rounded-md">
            <h2>There Is A Problem Reaching The Server</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full bg-gradient-to-tr py-12 from-emerald-500 to-emerald-200 dark:from-zinc-800 dark:to-zinc-800">
      <div className="flex justify-center">
        <div className="bg-white dark:bg-zinc-900 w-full md:w-[50%] flex flex-col gap-4 pt-8 justify-center text-center rounded-md">
          {orders && orders.length > 0 ? (
            <>
              <h2 className="text-zinc-500 dark:text-zinc-50 text-4xl">
                Order History
              </h2>
              <table className="table-auto border-collapse border ">
                {/* Table Heading Row */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Order Created</th>
                    <th>Price</th>
                    {/* <th>Description</th> */}
                  </tr>
                </thead>
                {/* Table Content Rows */}
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr className="bg-[#f2f2f2] dark:bg-zinc-900 border-collapse border">
                        <td>
                          <Link
                            className="text-green-600 hover:text-green-700 dark:text-white dark:hover:text-green-700"
                            href={`/${locale}/products/${order.product_id}`}
                          >
                            {order.product_id}
                          </Link>
                        </td>
                        <td>
                          {dayjs(order.created_at).format(
                            "DD MMMM, YYYY h:mm A"
                          )}
                        </td>
                        <td>$ {order.price / 100}</td>
                        {/* <td>{order.description}</td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <h2 className="text-zinc-500 dark:text-zinc-50 text-4xl p-4">
              Currently You Do Not Have Orders!
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default Orders;

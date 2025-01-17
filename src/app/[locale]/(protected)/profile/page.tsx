import Link from "next/link";
import { createClient } from "@/src/utils/supabase/server";
import Image from "next/image";

export default async function Profile() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  if (!userResponse.data || !userResponse.data.user) {
    return (
      <section className="py-12 text-center">
        <p className="text-2xl text-orange-700">
          Error: Unable to fetch user information
        </p>
      </section>
    );
  }
  const user = userResponse.data.user;
  return (
    <section className="h-full bg-gradient-to-tr py-12 from-emerald-500 to-emerald-200 dark:from-zinc-800 dark:to-zinc-800">
      <form className="max-w-xl mx-auto bg-white rounded-xl flex flex-col gap-10 pt-12 pb-4 px-10 items-center dark:bg-gradient-to-t dark:from-emerald-950 dark:to-emerald-800">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-sm border-4 border-emerald-500 dark:border-emerald-600">
          <img
            className="h-full w-auto object-cover"
            src={
              user?.user_metadata?.picture || "/images/products-placeholder.png"
            }
            alt="user profile picture"
          />
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="ml-6 text-lg text-zinc-500 dark:text-zinc-50">
            Email
          </label>
          <input
            className="w-full py-3 px-8 text-lg rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500 dark:bg-zinc-900 dark:focus:border-b-emerald-700"
            type="email"
            value={user.email}
            readOnly
          />
        </div>

        <div className="bg-emerald-600 text-white px-5 py-3 rounded-lg text-lg hover:bg-emerald-400 cursor-pointer transition-all">
          <Link href={"profile/orders"}>Order History</Link>
        </div>
      </form>
    </section>
  );
}

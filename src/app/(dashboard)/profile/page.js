import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile() {
  const { user } = await getSession();
  return (
    user && (
      <section className="bg-gradient-to-tr  py-12 from-emerald-500 to-emerald-200 dark:from-zinc-800 dark:to-zinc-800">
        <form className="max-w-xl mx-auto  bg-white rounded-xl flex flex-col gap-10 py-12 px-10 items-center dark:bg-gradient-to-t dark:from-emerald-950 dark:to-emerald-800">
          <div className="w-52 h-52 rounded-full overflow-hidden shadow-sm border-4 border-emerald-500 dark:border-emerald-600">
            <img
              className="h-full w-auto object-cover"
              src={user.picture}
              alt={user.name}
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="ml-6 text-2xl text-zinc-500 dark:text-zinc-50">
              Name
            </label>
            <input
              className="w-full py-3 px-8 text-2xl rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500 dark:bg-zinc-900 dark:focus:border-b-emerald-700"
              type="text"
              value={user.given_name}
              readOnly
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="ml-6 text-2xl text-zinc-500 dark:text-zinc-50">
              Surname
            </label>
            <input
              className="w-full py-3 px-8 text-2xl rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500 dark:bg-zinc-900 dark:focus:border-b-emerald-700"
              type="text"
              value={user.family_name}
              readOnly
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="ml-6 text-2xl text-zinc-500 dark:text-zinc-50">
              Email
            </label>
            <input
              className="w-full py-3 px-8 text-2xl rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500 dark:bg-zinc-900 dark:focus:border-b-emerald-700"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
        </form>
      </section>
    )
  );
}

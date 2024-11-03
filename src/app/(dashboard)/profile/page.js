import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile() {
  const { user } = await getSession();
  return (
    user && (
      <main>
        <section className="bg-gradient-to-t from-emerald-500 to-emerald-200 py-12">
          <form className="max-w-xl mx-auto  bg-white rounded-xl flex flex-col gap-10 py-12 px-10 items-center">
            <div className="w-52 h-52 rounded-full overflow-hidden shadow-sm border-4 border-emerald-500">
              <img
                className="h-full w-auto object-cover"
                src={user.picture}
                alt={user.name}
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="ml-6 text-2xl text-zinc-500">Name</label>
              <input
                className="w-full py-3 px-8 text-2xl rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500"
                type="text"
                value={user.given_name}
                readOnly
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="ml-6 text-2xl text-zinc-500">Surname</label>
              <input
                className="w-full py-3 px-8 text-2xl rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500"
                type="text"
                value={user.family_name}
                readOnly
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="ml-6 text-2xl text-zinc-500">Email</label>
              <input
                className="w-full py-3 px-8 text-2xl rounded-xl text-inherit font-inherit bg-zinc-100 border-b-4 border-b-transparent focus:outline-none focus:shadow-md focus:border-b-emerald-500"
                type="email"
                value={user.email}
                readOnly
              />
            </div>
          </form>
        </section>
      </main>
    )
  );
}

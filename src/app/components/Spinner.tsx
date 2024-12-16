export default function Spinner({ message }: { message: string }) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen text-lg text-emerald-800 dark:text-emerald-200">
      <div className="w-16 h-16 border-4 border-slate-400 border-t-emerald-800 rounded-full animate-spin"></div>
      <p>{message}</p>
    </div>
  );
}

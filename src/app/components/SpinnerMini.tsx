export default function SpinnerMini() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-sm text-emerald-800 dark:text-emerald-200">
      <div className="w-8 h-8 border-2 border-slate-400 border-t-emerald-800 rounded-full animate-spin"></div>
    </div>
  );
}

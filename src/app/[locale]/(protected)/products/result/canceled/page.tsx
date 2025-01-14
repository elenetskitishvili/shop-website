export default function CanceledPage() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="bg-red-500 w-[80%] h-80 flex rounded-lg flex-col gap-8 font-bold justify-center items-center text-white ">
        <h1 className="text-4xl">Payment Canceled</h1>
        <p className="text-2xl">
          Your payment was canceled. Please try again or contact support if you
          need assistance.
        </p>
      </div>
    </div>
  );
}

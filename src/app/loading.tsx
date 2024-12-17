import Spinner from "./components/Spinner";
export default function Loading() {
  return (
    <div className="flex flex-col gap-11">
      <Spinner />
      <p className="loading">Loading...</p>;
    </div>
  );
}

import "./Spinner.css";

export default function Spinner({ message }) {
  return (
    <div className="spinner-container">
      <div class="spinner"></div>
      <p>{message}</p>
    </div>
  );
}

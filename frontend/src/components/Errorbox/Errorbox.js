import "./Errorbox.css";

function Errorbox({ msg }) {
  return (
    <div className="cms-empty-error">
      <h1>{msg}</h1>
    </div>
  );
}

export default Errorbox;

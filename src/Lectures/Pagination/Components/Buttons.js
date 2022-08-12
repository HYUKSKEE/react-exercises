import "./Buttons.scss";

export default function Buttons({ offset, setOffset }) {
  return (
    <div className="pageBtn">
      <button
        className={offset === 0 ? "selected" : ""}
        onClick={() => {
          return setOffset(0);
        }}
      >
        1
      </button>
      <button
        className={offset === 20 ? "selected" : ""}
        onClick={() => {
          return setOffset(20);
        }}
      >
        2
      </button>
      <button
        className={offset === 40 ? "selected" : ""}
        onClick={() => {
          return setOffset(40);
        }}
      >
        3
      </button>
      <button
        className={offset === 60 ? "selected" : ""}
        onClick={() => {
          return setOffset(60);
        }}
      >
        4
      </button>
      <button
        className={offset === 80 ? "selected" : ""}
        onClick={() => {
          return setOffset(80);
        }}
      >
        5
      </button>
    </div>
  );
}

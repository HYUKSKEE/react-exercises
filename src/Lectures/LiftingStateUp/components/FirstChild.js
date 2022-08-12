import React from "react";

function FirstChild({ addHandler, subtractHandler }) {
  return (
    <div className="firstChild">
      FirstChild
      <div>여기서 누르는 버튼이</div>
      <div className="body">
        <button onClick={subtractHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  );
}

export default FirstChild;

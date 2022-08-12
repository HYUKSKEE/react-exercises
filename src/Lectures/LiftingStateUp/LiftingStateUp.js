import React, { useState } from "react";
import FirstChild from "./components/FirstChild";
import SecondChild from "./components/SecondChild";
import "./LiftingStateUp.scss";

function LiftingStateUp() {
  const [count, setCount] = useState(0);

  // addHandler
  const addHandler = () => {
    setCount(count + 1);
  };
  // subtractHandler
  const subtractHandler = () => {
    setCount(count - 1);
  };
  return (
    <div className="liftingStateUpParent">
      <div className="top">나는 부모</div>
      <div className="bottom">
        <FirstChild addHandler={addHandler} subtractHandler={subtractHandler} />
        <SecondChild count={count} />
      </div>
    </div>
  );
}

export default LiftingStateUp;

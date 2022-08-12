import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});

  return (
    <div className="urlParameters">
      <div className="btnWrapper">
        <Link to="/monsters">
          <button>Back to Monsters List</button>
        </Link>
      </div>
      <Card monster={monster} />
      <div className="btnWrapper">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default MonsterDetail;

import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  console.log(props);
  return (
    <Link
      to="/monsters/detail/"
      onClick={() => {
        console.log(props.id);
      }}
    >
      <div className="cardContainer">
        <img
          src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
          alt=""
        />
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </Link>
  );
}

export default Card;

import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  // 데이터 로딩
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setMonsters);
  }, [monsters]);

  const searchValue = monsters.filter((list) =>
    list.name.toLowerCase().includes(userInput.toLowerCase())
  );

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleChange} />
      <CardList monsters={searchValue} />
    </div>
  );
}

export default Monsters;

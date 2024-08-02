import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Tile from "./Tile";

const App = () => {
  // let API = "https://pokeapi.co/api/v2/pokemon/?limit=24";

  const [pokeData, setData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=24`).then((res) =>
      res.json().then((data) => {
        setData(data.results);
        console.log(data.results);
      })
    );
  }, []);

  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="onlyLeft">
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>More</a>
          </li>
          <li>
            <a>Pokedex</a>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="typed-out">Welcome to my Pokedex!</div>
      </div>
      <div>
        {pokeData.map((e, index) => {
          return <Tile obj={e} id={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default App;

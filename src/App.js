import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Tile from "./Tile";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Pokepedia from "./Pokepedia";
import Berries from "./Berries";

const Home = () => {
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
			<div class="navbar">
				<a id="onlyLeft" href="#home">
					Home
				</a>
				<Link to="/pedia">Pokepedia</Link>
				<div class="dropdown">
					<button class="dropbtn">
						Dropdown
						<i class="fa fa-caret-down"></i>
					</button>
					<div class="dropdown-content">
						<Link to="/berries">Berries</Link>
						<Link to="/items">Items</Link>
						<a href="#">Pokemons</a>
					</div>
				</div>
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

export default Home;

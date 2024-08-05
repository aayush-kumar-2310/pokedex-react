import React, { useEffect } from "react";
import "./tile.css";

import { useState } from "react";

const typeColors = {
	fire: "#fba54c",
	water: "#68a3f5",
	grass: "#7ac74c",
	electric: "#f4d23b",
	ice: "#96d9d6",
	fighting: "#c22e28",
	poison: "#a33ea1",
	ground: "#e2bf65",
	flying: "#a98ff3",
	psychic: "#f95587",
	bug: "#a6b91a",
	rock: "#b6a136",
	ghost: "#735797",
	dragon: "#6f35fc",
	dark: "#705746",
	steel: "#b7b7ce",
	fairy: "#d685ad",
};

const Tile = (props) => {
	const [type, setType] = useState([]);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/items/${props.id}`).then((response) =>
			response.json().then((data) => {
				setType(data.types);
				console.log(type);
			})
		);
	}, []);

	return (
		<div className="photoTile">
			<h1 className="pokeName">{props.obj.name.toUpperCase()}</h1>
			<img
				className="pokeImage"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${props.name}.png`}
			></img>
			<div>
				{type.map((t) => {
					return (
						<p
							className="pokeType"
							style={{ backgroundColor: typeColors[t.type.name] || "#fff" }}
						>
							{t.type.name.toUpperCase()}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default Tile;

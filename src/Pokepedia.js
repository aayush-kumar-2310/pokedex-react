import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./App";
import { useEffect, useState } from "react";
const Pokepedia = () => {
	const [fieldQuery, setFieldQuery] = useState("");
	const [selectedOption, setOption] = useState("");
	const [fetchedData, fetchData] = useState([]);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/${selectedOption}/${fieldQuery}`).then(
			(response) =>
				response.json().then((data) => {
					fetchData();
				})
		);
	});

	return (
		<div>
			<div className="navbar">
				<ul>
					<li className="onlyLeft">
						<Link to="/">Home</Link>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>More</a>
					</li>
					<li>
						<Link to="/pedia">More</Link>
					</li>
				</ul>
			</div>
			<div className="searchForm">
				<input
					type="text"
					value={fieldQuery}
					placeholder="Enter your text"
					onChange={(e) => setFieldQuery(e.target.value)}
				/>
				<input
					name="search"
					type="radio"
					value="pokemon"
					id="Pokemon"
					onChange={(e) => setOption(e.target.value)}
				/>
				<label for="Pokemon">Pokemon</label>
				<input
					name="search"
					type="radio"
					value="item"
					id="Item"
					onChange={(e) => setOption(e.target.value)}
				/>
				<label for="Pokemon">Item</label>
				<input
					name="search"
					type="radio"
					value="berry"
					id="Berry"
					onChange={(e) => setOption(e.target.value)}
				/>
				<label for="Pokemon">Berry</label>
				<input type="button" value={"Search"} id="searchButton" />
			</div>
			<div>
				<p>{selectedOption}</p>
			</div>
		</div>
	);
};

export default Pokepedia;

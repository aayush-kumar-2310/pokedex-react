import { useEffect, useState } from "react";
import Tile from "./Tile";

const Berries = () => {
	const [berryData, setData] = useState([]);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/berry/?limit=24`).then((res) =>
			res.json().then((data) => {
				setData(data.results);
				console.log(data.results);
			})
		);
	}, []);

	return (
		<div>
			<h2>Berries</h2>
			<div>
				{berryData.map((e, index) => {
					return <Tile obj={e} id={index + 1} />;
				})}
			</div>
		</div>
	);
};

export default Berries;

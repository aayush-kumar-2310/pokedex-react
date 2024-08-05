import { useEffect, useState } from "react";
import ItemTile from "./ItemTile";

const Berries = () => {
	const [berryData, setData] = useState([]);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/item/?limit=24`).then((res) =>
			res.json().then((data) => {
				setData(data.results);
				console.log(data.results);
			})
		);
	}, []);

	return (
		<div>
			<h2>Items</h2>
			<div>
				{berryData.map((e, name) => {
					return <ItemTile obj={e} name={e.name} />;
				})}
			</div>
		</div>
	);
};

export default Berries;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokepedia from "./Pokepedia";
import Berries from "./Berries";
import Items from "./Items.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pedia" element={<Pokepedia />} />
				<Route path="/berries" element={<Berries />} />
				<Route path="/items" element={<Items />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

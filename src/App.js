import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchMovie from "./components/SearchMovie";

function App() {
	return (
		<div>
			<Navbar />
			<SearchMovie />
		</div>
	);
}

export default App;

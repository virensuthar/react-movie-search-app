import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies(
			`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1&include_adult=false`
		);
	}, []);

	const getMovies = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	const searchMovies = async (e) => {
		e.preventDefault();
		if (query !== "") {
			getMovies(
				`https://api.themoviedb.org/3/search/movie?api_key=09d9c3bdaeb2fca5ce04ff375b92c4ae&language=en-US&query=${query}&page=1&include_adult=false`
			);
			setQuery("");
		}
	};

	return (
		<div>
			<section className="search_form">
				<form onSubmit={searchMovies}>
					<input
						name="query"
						className="search_box"
						type="text"
						placeholder="i.e Jurassic Park"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button className="search_btn" type="submit">
						Search
					</button>
				</form>
			</section>
			<section className="container">
				{movies.length > 0 &&
					movies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
			</section>
		</div>
	);
};

export default SearchMovie;

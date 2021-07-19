import React from "react";
import ReadMore from "./ReadMore";

const MovieCard = ({ title, poster_path, overview, vote_average }) => {
	const not_found =
		"https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

	return (
		<div className="movie_card">
			<img
				src={
					poster_path
						? `https://image.tmdb.org/t/p/original/${poster_path}`
						: not_found
				}
				alt={title}
				className="poster"
			/>
			<div className="card_body">
				<div className="card-head">
					<h3>{title}</h3>
					<p>
						<i className="star bi bi-star-fill"></i>{" "}
						<strong>{`${vote_average}/10`}</strong>
					</p>
				</div>

				<ReadMore>{overview}</ReadMore>
			</div>
		</div>
	);
};

export default MovieCard;

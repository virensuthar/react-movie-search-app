import React from "react";

const MovieCard = ({ title, poster_path, overview, vote_average }) => {
	return (
		<div className="movie_card">
			<img
				src={`https://image.tmdb.org/t/p/original/${poster_path}`}
				alt={title}
				className="poster"
			/>
			<div className="card_body">
				<div className="card-head">
					<h2>{title}</h2>
					<p>
						<i class="bi bi-star-fill"></i> {`${vote_average}/10`}
					</p>
				</div>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default MovieCard;

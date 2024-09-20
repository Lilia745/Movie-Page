import React from "react";
import { Link } from "react-router-dom";

const img_url = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movies }) {
    return (
        <div className="overflow-hidden rounded-[10px] w-[200px] card">
            <Link to={`/movie/${movies.id}`}>
                <img src={`${img_url}${movies.poster_path}`} alt={movies.title} />
                <div className="p-[15px] text-center">
                    <h3 className="text-[18px] m-[10px]">{movies.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
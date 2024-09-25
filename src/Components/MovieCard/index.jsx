import React from "react";
import { Link } from "react-router-dom";

const img_url = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-[12px] w-[250px] card bg-[rgba(255,255,255,0.2)] p-[10px]">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${img_url}${movie.poster_path}`}
          alt={movie.title}
          className="w-full border-[rgba(255,255,255,0.2)] rounded-[12px]"
        />
      </Link>
    </div>
  );
}

export default MovieCard;

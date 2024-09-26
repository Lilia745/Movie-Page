import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const img_url = "https://image.tmdb.org/t/p/w500";
const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = `${main_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;

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

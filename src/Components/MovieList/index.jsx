import React from 'react'
import MovieCard from '../MovieCard'

function MovieList({ movies }) {
    console.log(movies);
    return (
        <div className="flex justify-center flex-wrap gap-[20px]">
            {/* {movies.map((movies) => (
                <MovieCard key={movies.id} movie={movies} />
            ))} */}
        </div>
    )
}

export default MovieList
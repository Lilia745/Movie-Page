import React from 'react'
import MovieCard from '../MovieCard'

function MovieList({ movies}) {
    return (
        <div className="flex justify-center flex-wrap gap-[20px]">
            {/* {movies.map((movie,id) => (
                <MovieCard key={movie.id} movie={movie} />
            ))} */}
        </div>
    )
}

export default MovieList
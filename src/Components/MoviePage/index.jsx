import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import Button from '../Button'
import Footer from '../Footer';
import ActorSlider from '../ActorSlider'
import VideoSlider from '../VideoSlider';
const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const img_url = "https://image.tmdb.org/t/p/w500";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `${main_url}/movie/${id}?api_key=${api_key}&append_to_response=credits,videos`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  if (!movie) return <Loading />;

  return (
    <div className=" flex flex-col items-center justify-center bg-contain bg-no-repeat">
      <div
        className="imgs"
        style={{
          backgroundImage: `url(${img_url}${movie.backdrop_path})`
        }}>
        <div className="w-full h-[100vh] bg-[#0000005d] flex items-end">
          <div className="flex flex-col p-[30px]">
            <h1 className="text-[40px] text-[rgba(255,255,255,0.9)] M-title">{movie.title}</h1>
            <ul className="flex gap-[30px]">
              {movie.genres.map((genre) => (
                <li key={genre.id} className="ganre">{genre.name}</li>
              ))}
            </ul>
            <div className="flex mt-3 justify-between items-center">
              <Button text="Watch Now" />
              <Button text="Add Watchlist" bg="rgba(255, 255, 255, 0.1)" color="white" />
              <div className="icon">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="download-outline"></ion-icon>
                <ion-icon name="arrow-redo-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full">
        <div className="w-[600px] p-[20px]">
          <p className="text-[rgba(255,255,255,0.8)] overview">Overview:         {movie.overview}</p>
        </div>
        <h3 className="text-[white] text-[28px] p-[20px] actiors">Top Cast:</h3>
        <div className="mt-[26px]">
          <ActorSlider movie={movie} />
        </div>
        <h3 className="text-[white] text-[28px] p-[20px] actiors">Trailers:</h3>
        <VideoSlider movie={movie} />
      </div>
      <Footer />
    </div>
  )
}

export default MoviePage
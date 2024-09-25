import React from "react";
import MovieCard from "../MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

function MovieList({ movies, text }) {    
  return (
    <div className=" bg-black p-[20px]">
      <h1 className="text-[28px] text-[white]">{text} </h1>
      <Swiper
        className="m-3 p-5"
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieList;

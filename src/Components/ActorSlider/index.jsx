import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../App.css";
import { Navigation } from "swiper/modules";

const ActorSlider = ({ movie }) => {
    const actorImgUrl = "https://image.tmdb.org/t/p/w200";

    return (
        <div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
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
                {movie.credits.cast.map((actor) => (
                    <SwiperSlide key={actor.cast_id}>
                        <div className="flex">
                            <img
                                className="w-[100px] h-[100px] object-contain rounded-[50%]"
                                src={`${actorImgUrl}${actor.profile_path}`}
                                alt={actor.name}
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/200x300?text=No+Image";
                                }}
                            />
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-[white]">{actor.name}</p>
                                <p className="text-[13px] text-[rgba(255,255,255,0.69)] ganre1">{actor.character}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActorSlider;
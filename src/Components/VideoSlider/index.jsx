import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const VideoSlider = ({ movie }) => {
    return (
        <div className="video-slider">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {movie.videos.results.map((video) => (
                    <SwiperSlide key={video.id}>
                        <iframe
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            frameBorder="0"
                            allowFullScreen
                            className="w-full h-[500px] p-[20px] mb-[25px]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideoSlider;
import React from 'react';
import './VideoGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css/navigation";

const VideoGallery = () => {
  return (
    <div className="videogallery-cont">
      <div className="videogallery-wrapper">
        <h3>VIDEO GALLERY</h3>
        <Swiper
          className="videogallery-swiper"
          spaceBetween={5}
          slidesPerView={4}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,

              spaceBetween: 20,
            },
            960: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1650: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384" height="216" src="https://www.youtube.com/embed/fWTm3GG91PY"></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default VideoGallery;
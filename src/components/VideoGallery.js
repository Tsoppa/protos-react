import React from 'react';
import './VideoGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css/navigation";

const VideoGallery = () => {
  return (
    <div className="videogallery-cont" id="media-scroll">
      <div className="videogallery-wrapper">
        <h3>VIDEO GALLERY</h3>
        <Swiper
          className="videogallery-swiper"
          spaceBetween={5}
          slidesPerView={4}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
          <SwiperSlide>
            <iframe title="This is a unique title" width="384px" height="216px" src="https://www.youtube.com/embed/fWTm3GG91PY" frameborder="0" allowFullScreen />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default VideoGallery;
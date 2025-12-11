import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';

function MovieSwiper({ slides }) {

    const navigate = useNavigate();

    const goToMovieList = () => {
        navigate("/movielist");
    }

    const swipperWrappedRef = useRef (null);

  return (
   <main>
    <div className="swiper__container">
    <Swiper 
    modules={[Pagination, Autoplay]}
    grabCursor
    initialSlide={0}
    speed={800}
    slideToClickedSlide
    pagination={{ clickable: true }}
    autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
    }}
    loop={true}
    centeredSlides={true}
    slidesPerView={1}
    breakpoints={{
        320: { spaceBetween: 40 },
        650: { spaceBetween: 30 },
        1000: { spaceBetween: 20 },
    }}
    
    >
        {slides?.map ((slide, index) => (
      <SwiperSlide key={index}>

        <div className="swiperHeader">
            <h2 className='movieSwiper__title'>Best Movie website on the East Coast!</h2>
            <p className='movieSwiper__para'>Watch all your favorite movies and tv shows here!</p>
        </div>
        <div className="swiper__container">

        <img src={slide.Poster} alt={slide.Title} className='movieSwiper__img'/>
        <div className="movieSwiper__title">
            <h1>{slide.Title}</h1>
        </div>
        <div className="content">
            <button className='label' onClick={goToMovieList}>
                <span> More Movies?</span>
            </button>
        </div>
    </div>
      </SwiperSlide>
        ))}
    </Swiper>
        </div>

   </main>
  )
}

export default MovieSwiper;

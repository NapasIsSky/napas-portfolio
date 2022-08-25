import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { callbackify } from "util";

interface ICarousel {
  elementList: any;
  navigation: boolean;
}

const Carousel: React.FC<ICarousel> = (props) => {
  const { elementList, navigation } = props;

  return (
    <Swiper
      navigation={navigation}
      modules={navigation ? [Navigation] : undefined}
      spaceBetween={10}
      breakpoints={{
        320: {
          width: 350,
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {elementList.map((el: any, index: number) => (
        <SwiperSlide key={`carousel-element-${index}`}>{el}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

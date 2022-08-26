import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, SwiperOptions } from "swiper";

interface ICarousel {
  elementList: any;
  navigation: boolean;
  type: "iconList" | "cardList";
}

const Carousel: React.FC<ICarousel> = (props) => {
  const { elementList, navigation, type } = props;

  let breakpoints: SwiperOptions["breakpoints"] = {
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
  };

  if (type === "cardList") {
    breakpoints = {
      320: {
        width: 300,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    };
  }

  return (
    <Swiper
      navigation={navigation}
      modules={navigation ? [Navigation] : undefined}
      spaceBetween={10}
      breakpoints={breakpoints}
    >
      {elementList.map((el: any, index: number) => (
        <SwiperSlide key={`carousel-element-${index}`}>{el}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

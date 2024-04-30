import React, { useEffect } from 'react';

import styles from '../Carousel/Carousel.module.css';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import CarouselLeft from './CarouselLeft';
import CarouselRight from './CarouselRight';

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};

const Carousel = ({ data, component }) => {
  return (
    <div className={styles.container}>
      <Swiper
        style={{ padding: '0 20px' }}
        initialSlide={0}
        slidesPerView={'auto'}
        spaceBetween={30}
        modules={[Navigation]}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />

        {data.map((item, idx) => {
          return <SwiperSlide key={idx}>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
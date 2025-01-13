import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from '../../../../constants/constants';
import { Slide } from '../../../../types/Slides';
import './BannerSlider.scss';
import 'swiper/css';

type Props = {
  slides: Slide[];
  slidesPerScreen: number;
};

export const BannerSlider: React.FC<Props> = ({ slides, slidesPerScreen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isWindowMobile = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    isWindowMobile();

    window.addEventListener('resize', isWindowMobile);

    return () => window.removeEventListener('resize', isWindowMobile);
  }, []);

  return (
    <div className="banner-slider">
      <div className="banner-slider__slides">
        <button
          className={`banner-slider__button button button--long button--secondary button--round banner-slider__button--prev`}
        >
          <i className="button__icon fa-solid fa-angle-left"></i>
        </button>
        <button
          className={`banner-slider__button button button--long button--secondary button--round banner-slider__button--next`}
        >
          <i className="button__icon fa-solid fa-angle-right"></i>
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={slidesPerScreen}
          navigation={{
            enabled: true,
            nextEl: '.banner-slider__button--next',
            prevEl: '.banner-slider__button--prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          observer={true}
          observeParents={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {!!slides.length &&
            slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="banner-slider__slide"
              >
                <img
                  src={isMobile ? slide.mobileContent : slide.content}
                  alt={`banner_${slide.id}`}
                  className="banner-slider__image image"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="swiper-pagination">
        <div className="swiper-pagination-bullet"></div>
        <div className="swiper-pagination-bullet"></div>
        <div className="swiper-pagination-bullet"></div>
      </div>
    </div>
  );
};

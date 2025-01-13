import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Product } from '../../../../types/Product';
import { ProductCard } from '../../../ProductCard/ProductCard';
import './ProductSlider.scss';
import 'swiper/css';

type Props = {
  products: Product[];
  productsPerScreen: number;
  headline: string;
};

export const ProductSlider: React.FC<Props> = ({
  products,
  productsPerScreen,
  headline,
}) => {
  return (
    <div className="product-slider">
      <div className="product-slider__slides">
        <div className="product-slider__header">
          <h2 className="product-slider__headline headline--2">
            {headline}
          </h2>
          <div className="product-slider__buttons">
            <button
              className={`product-slider__button button button--secondary button--round product-slider__button--prev`}
            >
              <i className="button__icon fa-solid fa-angle-left"></i>
            </button>
            <button
              className={`product-slider__button button button--secondary button--round product-slider__button--next`}
            >
              <i className="button__icon fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={productsPerScreen}
          navigation={{
            enabled: true,
            nextEl: '.product-slider__button--next',
            prevEl: '.product-slider__button--prev',
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {!!products.length &&
            products.map((product) => (
              <SwiperSlide key={`product_slide_${product.id}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

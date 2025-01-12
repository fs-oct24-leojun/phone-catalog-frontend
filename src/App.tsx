import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { CartItem } from './components/Pages/CartPage/CartItem/CartItem';
import { BannerSlider } from './components/Pages/HomePage/BannerSlider/BannerSlider';
import { ProductSlider } from './components/Pages/HomePage/ProductSlider/ProductSlider';
import { useEffect, useState } from 'react';
import { Slide } from './types/Slides';
import { getHomeSlides, getProducts } from './utils/api';
import { Product } from './types/Product';
import { Header } from './components/Header/Header';

// import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
// How to import Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// How to import Pagination
// import ReactPaginate from 'react-paginate';
// Swiper Styles (if needed. Idk yet, but let it be here)
// import 'swiper/css';

export const App: React.FC = () => {
  // TODO: Move this to HomePage !!!!

  const [slides, setSlides] = useState<Slide[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getHomeSlides()
      .then(setSlides)
      .catch((error) => console.log(error.message));

    getProducts()
      .then(setProducts)
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Header />
      <main className="wrapper">
        <BannerSlider
          slides={slides}
          slidesPerScreen={1}
        />
        <div className="container">
          <Outlet />
          <ProductSlider
            products={products}
            productsPerScreen={4}
          />
          <CartItem />
        </div>
      </main>
      <Footer />
    </>
  );
};

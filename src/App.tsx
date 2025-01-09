import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
// import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
// How to import Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// How to import Pagination
// import ReactPaginate from 'react-paginate';
// Swiper Styles (if needed. Idk yet, but let it be here)
// import 'swiper/css';

export const App: React.FC = () => {
  return (
    <>
      <main className="wrapper">
        <Outlet />
        {/* uncomment that to test scroll to the top */}
        {/* <NotFoundPage />
        <NotFoundPage />
        <NotFoundPage /> */}
      </main>
      <Footer />
    </>
  );
}

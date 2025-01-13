import './App.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { DropdownList } from './components/DropdownList/DropdownList';
// import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
// How to import Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// How to import Pagination
// import ReactPaginate from 'react-paginate';
// Swiper Styles (if needed. Idk yet, but let it be here)
// import 'swiper/css';

export const App: React.FC = () => {
  const product = {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-14-pro',
    name: 'Apple iPhone XS 64GB Spacegray',
    fullPrice: 760,
    price: 720,
    screen: "5.8' OLED",
    capacity: '64GB',
    color: 'spacegray',
    ram: '4GB',
    year: 2018,
    image: '../img/phones/apple-iphone-xs-max/silver/00.webp',
  };

  return (
    <>
      <ProductCard product={product} />
      <DropdownList
        description="Sort by"
        items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
        onSelect={(selected) => console.log('Selected sort:', selected)}
      />
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
};

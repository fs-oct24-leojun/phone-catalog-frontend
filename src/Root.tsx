import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { HomePage } from './components/pages/HomePage/HomePage';
import { CatalogPage } from './components/pages/CatalogPage/CatalogPage';
import { CartPage } from './components/pages/CartPage/CartPage';
import { FavouritesPage } from './components/pages/FavouritesPage/FavouritesPage';
import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
import { ProductPage } from './components/pages/ProductPage/ProductPage' 
import { SuccessOrderPage } from './components/pages/SuccessOrderPage/SuccessOrderPage';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="catalog"
          element={<CatalogPage />}
        >
          <Route index element={<CatalogPage />} />
          <Route path=":category" element={<CatalogPage />} />
        </Route>
        <Route path=':category/:productId' element={<ProductPage />}/>
        <Route
          path="cart"
          element={<CartPage />}
        />
        <Route path="/success" element={<SuccessOrderPage />} />
        <Route
          path="favourites"
          element={<FavouritesPage />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </Router>
);

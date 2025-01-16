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
        >
          <Route index element={<CatalogPage />} />
          <Route path=":productType" element={<CatalogPage />} />
        </Route>
        <Route
          path="cart"
          element={<CartPage />}
        />
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

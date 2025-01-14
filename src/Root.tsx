import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { CatalogPage } from './components/Pages/CatalogPage/CatalogPage';
import { PhonesPage } from './components/Pages/CatalogPage/PhonePage/PhonePage';
import { TabletsPage } from './components/Pages/CatalogPage/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/Pages/CatalogPage/AccessoriesPage/AccessoriesPage';
import { CartPage } from './components/Pages/CartPage/CartPage';
import { FavouritesPage } from './components/Pages/FavouritesPage/FavouritesPage';
import { NotFoundPage } from './components/Pages/NotFoundPage/NotFoundPage';

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
          <Route
            index
            element={
              <Navigate
                to="/catalog/phones"
                replace
              />
            }
          />
          <Route
            path="phones"
            element={<PhonesPage />}
          />
          <Route
            path="tablets"
            element={<TabletsPage />}
          />
          <Route
            path="accessories"
            element={<AccessoriesPage />}
          />
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

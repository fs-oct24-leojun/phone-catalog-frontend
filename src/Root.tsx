import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { NotFoundPage } from './components/Pages/NotFoundPage/NotFoundPage.tsx';
import { HomePage } from './components/Pages/HomePage/HomePage.tsx';
import { CartPage } from './components/Pages/CartPage/CartPage.tsx';
import { CatalogPage } from './components/Pages/CatalogPage/CatalogPage.tsx';
import { PhonesPage } from './components/Pages/CatalogPage/PhonePage/PhonePage.tsx';
import { TabletsPage } from './components/Pages/CatalogPage/TabletsPage/TabletsPage.tsx';
import { AccessoriesPage } from './components/Pages/CatalogPage/AccessoriesPage/AccessoriesPage.tsx';
import { FavouritesPage } from './components/Pages/FavouritesPage/FavouritesPage.tsx';

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

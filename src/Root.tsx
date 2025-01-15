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
import { PhonesPage } from './components/pages/CatalogPage/PhonePage/PhonePage';
import { TabletsPage } from './components/pages/CatalogPage/TabletsPage/TabletsPage';
import { AccessoriesPage } from './components/pages/CatalogPage/AccessoriesPage/AccessoriesPage';
import { CartPage } from './components/pages/CartPage/CartPage';
import { FavouritesPage } from './components/pages/FavouritesPage/FavouritesPage';
import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
import { ThemeProvider } from './ThemeContext';

export const Root: React.FC = () => (
  <ThemeProvider>
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
  </ThemeProvider>
);

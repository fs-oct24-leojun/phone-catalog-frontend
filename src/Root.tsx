import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import React, { Suspense } from 'react';
import { App } from './App';
import {
  HomePage,
  CartPage,
  CatalogPage,
  FavouritesPage,
  NotFoundPage,
  AccessoriesPage,
  TabletsPage,
  PhonesPage,
  // SuccessOrderPage,
} from './utils/lazyPages';
import { Loader } from './components/Loader/Loader';

export const Root: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  </Router>
);

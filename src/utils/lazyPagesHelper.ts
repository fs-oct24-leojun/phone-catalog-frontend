import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('../components/pages/HomePage/HomePage').then((module) => ({default: module.HomePage,})),
);
export const CartPage = lazy(() =>
  import('../components/pages/CartPage/CartPage').then((module) => ({default: module.CartPage,})),
);
export const CatalogPage = lazy(() =>
  import('../components/pages/CatalogPage/CatalogPage').then((module) => ({default: module.CatalogPage,})),
);
export const FavouritesPage = lazy(() =>
  import('../components/pages/FavouritesPage/FavouritesPage').then(
    (module) => ({ default: module.FavouritesPage }),
  ),
);
export const NotFoundPage = lazy(() =>
  import('../components/pages/ServicePages/NotFoundPage/NotFoundPage').then(
    (module) => ({ default: module.NotFoundPage }),
  ),
);
export const ProductPage = lazy(() =>
  import('../components/pages/ProductPage/ProductPage').then((module) => ({default: module.ProductPage,})),
);
export const SuccessOrderPage = lazy(() =>
  import('../components/pages/SuccessOrderPage/SuccessOrderPage').then(
    (module) => ({ default: module.SuccessOrderPage }),
  ),
);

export const ContactsPage = lazy(() =>
  import('../components/pages/ContactsPage/ContactsPage').then(
    (module) => ({ default: module.ContactsPage }),
  ),
);

export const LoginPage = lazy(() =>
  import('../components/pages/LoginPage/LoginPage').then(
    (module) => ({ default: module.LoginPage }),
  ),
);

export const RightsPage = lazy(() =>
  import('../components/pages/RightsPage/RightsPage').then(
    (module) => ({ default: module.RightsPage }),
  ),
);

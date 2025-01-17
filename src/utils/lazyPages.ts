import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('../components/pages/HomePage/HomePage').then((module) => ({
    default: module.HomePage,
  })),
);
export const CartPage = lazy(() =>
  import('../components/pages/CartPage/CartPage').then((module) => ({
    default: module.CartPage,
  })),
);
export const CatalogPage = lazy(() =>
  import('../components/pages/CatalogPage/CatalogPage').then((module) => ({
    default: module.CatalogPage,
  })),
);
export const FavouritesPage = lazy(() =>
  import('../components/pages/FavouritesPage/FavouritesPage').then(
    (module) => ({ default: module.FavouritesPage }),
  ),
);
export const NotFoundPage = lazy(() =>
  import('../components/pages/NotFoundPage/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
);
export const ProductPage = lazy(() =>
  import('../components/pages/ProductPage/ProductPage').then((module) => ({
    default: module.ProductPage,
  })),
);
export const SuccessOrderPage = lazy(() =>
  import('../components/pages/SuccessOrderPage/SuccessOrderPage').then(
    (module) => ({ default: module.SuccessOrderPage }),
  ),
);
export const PhonesPage = lazy(() =>
  import('../components/pages/CatalogPage/PhonePage/PhonePage').then(
    (module) => ({ default: module.PhonesPage }),
  ),
);
export const TabletsPage = lazy(() =>
  import('../components/pages/CatalogPage/TabletsPage/TabletsPage').then(
    (module) => ({ default: module.TabletsPage }),
  ),
);
export const AccessoriesPage = lazy(() =>
  import('../components/pages/CatalogPage/AccessoriesPage/AccessoriesPage').then(
    (module) => ({ default: module.AccessoriesPage }),
  ),
);

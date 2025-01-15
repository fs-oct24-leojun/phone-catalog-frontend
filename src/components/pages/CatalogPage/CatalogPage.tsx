import { Outlet } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import './CatalogPage.scss';

// TO DO for Maks:
// Add sort login to your dropdown lists if possible
// Also consider moving this text options to a const array

export const CatalogPage: React.FC = () => (
  <section className="catalog-page">
    <h1>Mobile Phones</h1>
    <div className="catalog-page__filters filters">
      <DropdownList description="Sort by"
        items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
        onSelect={(selected) => console.log('Selected sort:', selected)} />
      <DropdownList description="Sort by"
        items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
        onSelect={(selected) => console.log('Selected sort:', selected)} />
    </div>
    <Outlet />
  </section>
);

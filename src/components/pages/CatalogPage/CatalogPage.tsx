import { Outlet } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';

export const CatalogPage: React.FC = () => (
  <>
    <h1>Mobile Phones</h1>;
    <DropdownList description="Sort by"
      items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
      onSelect={(selected) => console.log('Selected sort:', selected)} />
    <Outlet />
  </>
);

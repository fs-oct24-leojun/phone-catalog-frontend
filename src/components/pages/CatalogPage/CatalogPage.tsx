import { Outlet } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import './CatalogPage.scss';

// TO DO for Kostya
// Implement dropdown logic.
// Imagine that you'll fetch data here and parse it to the some sort of Products grid component
// where you'll sort data
// Move data from dropdowns to constants.

// TO DO for Lilia
// Imagine that the link to the page will be /catalog/[category]
// where [categoty] - parameter (:category)
// it's already partially implemented in Root.
// Here you have to fetch data from server, take category parameter from URL
// and use it as a filter parameter. Filtered product you have to pass to some sort of
// 'products grid component' (you can take the whole section from Phones page)
// and that's it.

// I guess that'll be the most efficient way to do that.

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

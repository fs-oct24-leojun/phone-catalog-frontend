import { ProductExtended } from '../../../../../types/ProductsExtended';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useMemo } from 'react';
import { getByColorAndCapacity } from '../../../../../utils/filterProductsHelper';

type Props = {
  capacity: string;
  products: ProductExtended[];
  product: ProductExtended;
};
export const CapacityButton: React.FC<Props> = ({
  capacity,
  products,
  product,
}) => {
  const target = useMemo(
    () => getByColorAndCapacity(products, product.color, capacity),
    [product, products, capacity],
  );

  return (
    <Link
      to={`/${product.category}/${target}`}
      className={classNames(
        'capacity-selector__button button button--secondary',
        { 'is-active': product.capacity === capacity },
      )}
    >
      {capacity}
    </Link>
  );
};

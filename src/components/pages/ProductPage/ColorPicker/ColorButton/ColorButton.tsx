import { ProductExtended } from '../../../../../types/ProductsExtended';
import { getByColorAndCapacity } from '../../../../../utils/filterProductsHelper';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Colors } from '../../../../../constants/constants';

type Props = {
  color: string;
  products: ProductExtended[];
  product: ProductExtended;
};

export const ColorButton: React.FC<Props> = ({
  color, products, product 
}) => {
  const target = useMemo(
    () => getByColorAndCapacity(products, color, product.capacity),
    [color, products, product],
  );

  return (
    <Link
      to={`/${product.category}/${target}`}
      className={classNames(
        'color-selector__button button button--round button--secondary',
        { 'is-active': product.color === color },
      )}
    >
      <div
        className="color-selector__color"
        style={{ backgroundColor: Colors[color as keyof typeof Colors] }}
      ></div>
    </Link>
  );
};

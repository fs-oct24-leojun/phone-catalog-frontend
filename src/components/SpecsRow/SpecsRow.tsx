import { Product } from '../../types/Product';
import { ProductExtended } from '../../types/ProductsExtended';

type Props = {
  specification: string;
  product: Product | ProductExtended;
}

const formatSpecifications = (specs: string | string[]) => {
  if (Array.isArray(specs)) {
    return specs.join(', ');
  }

  return specs;
};

export const SpecsRow: React.FC<Props> = ({ specification, product}) => {
  return (
    <div className="specifications-row">
      <p className="specifications-row__title title">{specification}</p>
      <p className="specifications-row__info small-text">{formatSpecifications(product.specifications[specification])}</p>
    </div>
  );
}
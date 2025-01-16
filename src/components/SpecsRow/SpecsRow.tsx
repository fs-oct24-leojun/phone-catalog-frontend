import { Product } from '../../types/Product';
import { ProductExtended } from '../../types/ProductsExtended';
import './SpecsRow.scss';


type Props = {
  specification: string;
  product: Product | ProductExtended;
}

export const SpecsRow: React.FC<Props> = ({ specification, product}) => {
  return (
    <div className="specifications-row">
      <p className="specifications-row__title title">{specification}</p>
      <p className="specifications-row__info small-text">{product.specifications[specification]}</p>
    </div>
  );
}
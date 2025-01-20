import { Product } from '../../types/Product';
import './PriceBlock.scss';

type Props = {
  product: Product;
};

export const PriceBlock: React.FC<Props> = ({ product }) => {
  return (
    <div className="price">
      <p className="price__actual-price">{`$${product.priceRegular}`}</p>
      {product.priceRegular !== product.priceDiscount && (
        <p className="price__full-price">{`$${product.priceDiscount}`}</p>
      )}
    </div>
  );
};

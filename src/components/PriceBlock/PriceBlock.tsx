import { Product } from "../../types/Product";
import './PriceBlock.scss';

type Props = {
    product: Product
};

export const PriceBlock: React.FC<Props> = ({ product }) => {
  return (
    <div className="price">
      <p className="price__actual-price headline--3">{`$${product.priceRegular}`}</p>
      {product.priceRegular !== product.priceDiscount && (
        <p className="price__full-price headline--3">{`$${product.priceDiscount}`}</p>
      )}
    </div>
  );
}
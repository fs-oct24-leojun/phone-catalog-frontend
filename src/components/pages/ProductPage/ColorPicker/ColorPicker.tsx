import './ColorPicker.scss';
import { ProductExtended } from '../../../../types/ProductsExtended';
import './ColorPicker.scss';
import { ColorButton } from './ColorButton/ColorButton';

type Props = {
    product: ProductExtended;
    products: ProductExtended[];
}

export const ColorPicker: React.FC<Props> = ({product, products}) => {
  return (
    <div className="color-picker">
      <h4 className="color-picker__title title small-text">Available colors</h4>
      <div className="color-picker__color-selector color-selector selector">
        {product.colorsAvailable.map(color =>
          <ColorButton
            products={products}
            product={product}
            color={color}
            key={`${product.namespaceId}__${color}`}
          />
        )}
                  
      </div>
    </div>
  );
};
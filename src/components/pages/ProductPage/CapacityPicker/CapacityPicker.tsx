import { ProductExtended } from "../../../../types/ProductsExtended";
import { CapacityButton } from "./CapacityButton/CapacityButton";
import './CapacityPicker.scss';

type Props = {
    product: ProductExtended;
    products: ProductExtended[];
}

export const CapacityPicker: React.FC<Props> = ( { product, products } ) => {
  console.log(product.capacity);

  return(
    <div className="capacity-picker">
      <h4 className="capacity-picker__title title small-text">Select capacity</h4>
      <div className="capacity-picker__capacity-selector capacity-selector selector">
        {product.capacityAvailable.map(capacity =>
          <CapacityButton
            products={products}
            product={product}
            capacity={capacity}
            key={`${product.namespaceId}__${capacity}`}
          />
        )}
      </div>
    </div>
  );
};
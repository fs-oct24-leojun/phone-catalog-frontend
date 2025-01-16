import { ProductExtended } from "../../types/ProductsExtended";
import { Product } from "../../types/Product";
import { SpecsRow } from "../SpecsRow/SpecsRow";

type Props = {
    product: Product | ProductExtended;
    specsAmount?: number;
};
export const SpecsTable: React.FC<Props> = ({ product, specsAmount = 0}) => {
  const specifications = specsAmount === 0 ? Object.keys(product.specifications) :
    Object.keys(product.specifications).slice(0, specsAmount);

  return (
    <>
      { specifications.map(specification => (<SpecsRow specification={specification} product={product} key={`specifications_${product.id}_${specification}`}/>))}
    </>
  )
   
}
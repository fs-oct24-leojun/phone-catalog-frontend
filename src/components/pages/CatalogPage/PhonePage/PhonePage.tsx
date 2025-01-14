import React from "react";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../ProductCard/ProductCard"
import products from '../../../../../public/api/products.json'
import './PhonePage.scss'

type Props = {
  products: Product[];
};

export const PhonesPage: React.FC<Props> = () => {

  return (
    <>
      <div className="phone-page">
        {products
          .filter((product) => product.category === "phones")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

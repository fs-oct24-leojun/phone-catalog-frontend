import React from "react";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../ProductCard/ProductCard"
import products from '../../../../../public/api/products.json'
import './AccessoriesPage.scss'

type Props = {
  products: Product[];
};

export const AccessoriesPage: React.FC<Props> = () => {
  return (
    <>
      <div className="accessories-page">
        {products
          .filter((product) => product.category === "accessories")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};
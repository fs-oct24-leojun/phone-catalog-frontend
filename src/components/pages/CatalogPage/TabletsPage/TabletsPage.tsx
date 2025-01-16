import React from "react";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../ProductCard/ProductCard"
import products from '../../../../../public/api/products.json'
import './TabletsPage.scss'
import { Back } from "../../../Back/Back";
import { Crisps } from "../../../Crisps/Crisps";

type Props = {
  products: Product[];
};

export const TabletsPage: React.FC<Props> = () => {
  return (
    <>
      <Crisps />
      <Back />
      <div className="tablets-page">
        {products
          .filter((product) => product.category === "tablets")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};
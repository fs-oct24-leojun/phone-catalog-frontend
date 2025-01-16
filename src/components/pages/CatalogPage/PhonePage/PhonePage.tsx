import React from "react";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../ProductCard/ProductCard"
import products from '../../../../../public/api/products.json'
import './PhonePage.scss'
import { Back } from "../../../Back/Back";
import { Crisps } from "../../../Crisps/Crisps";

type Props = {
  products: Product[];
};

export const PhonesPage: React.FC<Props> = () => {


  return (
    <>
      <Crisps />
      <Back />
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

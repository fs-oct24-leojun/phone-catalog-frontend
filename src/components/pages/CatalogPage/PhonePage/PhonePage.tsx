import React, { useState, useEffect } from "react";
import { Product } from "../../../../types/Product";
import { getProducts } from "../../../../utils/api";
import { ProductCard } from "../../../ProductCard/ProductCard"

export const PhonesPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
    
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.log(error.message));
  }, []);
  
  return (
    <>
      <div className="catalog-page">
        {products
          .filter((product) => product.category === "phones")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

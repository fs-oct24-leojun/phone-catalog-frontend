import React, { useState, useEffect } from "react";
import { Product } from "../../../../types/Product";
import { getProducts } from "../../../../utils/api";
import { ProductCard } from "../../../ProductCard/ProductCard"

export const PhonesPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // TO DO: move this func to custom hook
  // Also, consider avoiding making another fetch request
  // Might need to look up some info late
  // (c) Anna
    
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.log(error.message));
  }, []);
  
  return (
    <>
      <div className="catalog-page__section">
        {products
          .filter((product) => product.category === "phones")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

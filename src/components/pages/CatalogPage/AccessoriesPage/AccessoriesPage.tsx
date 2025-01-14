import React, { useState, useEffect } from "react";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../ProductCard/ProductCard"
import { getProducts } from "../../../../utils/api";

// type Props = {
//   products: Product[];
// };

export const AccessoriesPage: React.FC = () => {

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
          .filter((product) => product.category === "accessories")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};
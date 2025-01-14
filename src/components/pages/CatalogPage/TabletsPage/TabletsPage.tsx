import React, {useState, useEffect} from "react";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../ProductCard/ProductCard"
import { getProducts } from "../../../../utils/api";

// type Props = {
//   products: Product[];
// };

export const TabletsPage: React.FC= () => {

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
          .filter((product) => product.category === "tablets")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};
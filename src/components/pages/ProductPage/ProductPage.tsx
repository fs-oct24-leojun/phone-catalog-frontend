import { ProductSlider } from "../HomePage/ProductSlider/ProductSlider";
import { SpecsTable } from "../../SpecsTable/SpecsTable";
import { Paragraph } from './Paragraph/Paragraph';
import { useParams } from "react-router-dom";
import { getProductsById } from '../../../utils/api';
import { useEffect, useState } from "react";
import { ProductExtended } from "../../../types/ProductsExtended";
import { Gallery } from "./Gallery/Gallery";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { CapacityPicker } from "./CapacityPicker/CapacityPicker";
import { PriceBlock } from "../../PriceBlock/PriceBlock";
import { ProductButtons } from "../../ProductButtons/ProductButtons";
import { getRecommendation } from '../../../utils/filterProducts';
import './ProductPage.scss';
import { Product } from "../../../types/Product";

export const ProductPage: React.FC = () => {
  const { category, productId }  = useParams();
  const [productData, setProductData] = useState<{
    products: ProductExtended[];
    selectedProduct: ProductExtended;
    recommendedProducts: Product;
  }>({
    products: [],
    selectedProduct: null,
    recommendedProducts: []
  });
    
  useEffect(() => {
    getProductsById(productId, category)
      .then(rawProducts => {
        setProductData({
          products: rawProducts,
          selectedProduct: rawProducts.find(product => product.id === productId),
          recommendedProducts: getRecommendation(rawProducts.find(product => product.id === productId)),
        });
      })

  }, [productId, category]);

  const { products, selectedProduct, recommendedProducts} = productData;

  return (
    <div className="product-page">

      {selectedProduct && !!products?.length && (
        <>
          <div className="product-page__headline-block headline-block">
            <h2 className="headline-block__headline headline headline--2">{selectedProduct?.name}</h2>
          </div>
          <section className="product-page__gallery-section gallery-section section">
            <Gallery product={selectedProduct}/>
          </section>
          <section className="product-page__specifications-section specifications-section section">
            <div className="specifications-section__content content">
              <ColorPicker product={selectedProduct} products={products}/>
              <CapacityPicker product={selectedProduct} products={products}/>
              <div className="specifications-section__info">
                <PriceBlock product={selectedProduct}/>
                <ProductButtons />
                <SpecsTable product={selectedProduct} specsAmount={4}/>
              </div>
            </div>
          </section>
          <section className="product-page__about-section about-section section">
            <div className="about-section__sub-headline-block sub-headline-block">
              <h3 className="sub-headline-block__headline headline headline--3">About</h3>
            </div>
            <div className="about-section__content content">
              {selectedProduct?.description.map(content => (
                <Paragraph title={content.title} text={content.text} key={content.title}/>
              ))}
            </div>
          </section>
          <section className="product-page__tech-specs-section tech-specs-section section">
            <div className="tech-specs-section__sub-headline-block sub-headline-block">
              <h3 className="sub-headline-block__headline headline headline--3">Tech Specs</h3>
            </div>
            <SpecsTable product={selectedProduct} />
          </section>
          <section className="product-page__recommended-section recommended-section section">
            <ProductSlider products={recommendedProducts} productsPerScreen={4} headline={'You may also like'}/>
          </section>
        
        </>


      )}

    </div>
  );
};

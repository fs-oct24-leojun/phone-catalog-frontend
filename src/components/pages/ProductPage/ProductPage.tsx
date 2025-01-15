import { ProductSlider } from "../HomePage/ProductSlider/ProductSlider";
import { SpecsRow } from './SpecsRow/SpecsRow';
import { Paragraph } from './Paragraph/Paragraph';
import { useParams } from "react-router-dom";
import { getProductById } from '../../../utils/api';
import { useEffect, useState } from "react";
import { ProductExtended } from "../../../types/ProductsExtended";

export const ProductPage: React.FC = () => {
  const { category, productId }  = useParams();
  const [product, setProduct] = useState<ProductExtended | null>(null);
    
  useEffect(() => {
    getProductById(productId, category)
      .then(setProduct)
  }, [productId, category]);

  console.log(product);
  console.log(product?.specifications);

  return (
    <div className="product-page">
      <h1 className="product-page__headline headline headline--1">{product?.name}</h1>
      <section className="product-page__gallery-section gallery-section section">

      </section>
      <section className="product-page__specifications-section specifications-section section">
        <h3 className="specifications-section__headline headline--divider headline--h3">About</h3>
        <div className="specifications-section__content content">
                   
        </div>
      </section>
      <section className="product-page__about-section about-section section">
        <h3 className="about-section__headline headline--divider headline--h3">About</h3>
        <div className="about-section__content content">
          {product?.description.map(content => (
            <Paragraph title={content.title} text={content.text} key={content.title}/>
          ))}
        </div>
      </section>
      <section className="product-page__tech-specs-section tech-specs-section section">
                
                
        <SpecsRow />
      </section>
      <section className="product-page__recommended-section recommended-section section">
        <ProductSlider products={[]} productsPerScreen={4} headline={'You may also like'}/>
      </section>
    </div>
  );
};

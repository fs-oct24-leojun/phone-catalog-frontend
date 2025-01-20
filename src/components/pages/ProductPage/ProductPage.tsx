import { ProductSlider } from '../../ProductSlider/ProductSlider';
import { SpecsTable } from '../../SpecsTable/SpecsTable';
import { Paragraph } from './Paragraph/Paragraph';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../../utils/apiHelper';
import { useEffect, useState } from 'react';
import { ProductExtended } from '../../../types/ProductsExtended';
import { Gallery } from './Gallery/Gallery';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { CapacityPicker } from './CapacityPicker/CapacityPicker';
import { PriceBlock } from '../../PriceBlock/PriceBlock';
import { ProductButtons } from '../../ProductButtons/ProductButtons';
import { getRecommendation } from '../../../utils/apiHelper';
import { Product } from '../../../types/Product';
import { Crisps } from '../../Crisps/Crisps';
import './ProductPage.scss';
import { Back } from '../../Back/Back';

export const ProductPage: React.FC = () => {
  const { category, productId } = useParams();
  const [productData, setProductData] = useState<{
    products: ProductExtended[];
    selectedProduct: ProductExtended | null;
  }>({
    products: [],
    selectedProduct: null,
  });

  const [recommended, setRecommended] = useState<Product[]>([]);

  useEffect(() => {
    getProductsById(productId, category)
      .then((rawProducts) => {
        setProductData({
          products: rawProducts,
          selectedProduct:
            rawProducts.find((product) => product.id === productId) || null,
        });
      })
      .catch();
  }, [productId, category]);

  useEffect(() => {
    if (productData.selectedProduct) {
      getRecommendation(productData.selectedProduct)
        .then(setRecommended)
        .catch();
    }
  }, [productData]);

  const { products, selectedProduct } = productData;

  return (
    <div className="product-page">
      <Crisps />
      <Back />
      {selectedProduct && !!products?.length && (
        <>
          <div className="product-page__headline-block headline-block">
            <h2 className="headline-block__headline headline headline--2">
              {selectedProduct?.name}
            </h2>
          </div>
          <section className="product-page__general-info-section general-info-section section">
            <div className="general-info__gallery-block gallery-block">
              <Gallery product={selectedProduct} />
            </div>
            <div className="general-info__specifications-block specifications-block">
              <div className="specifications-block__content content">
                <ColorPicker
                  product={selectedProduct}
                  products={products}
                />
                <CapacityPicker
                  product={selectedProduct}
                  products={products}
                />
                <div className="specifications-block__info">
                  <PriceBlock product={selectedProduct} />
                  <ProductButtons product={selectedProduct} />
                  <SpecsTable
                    product={selectedProduct}
                    specsAmount={4}
                  />
                </div>
                <p className="specifications-block__product-id small-text">
                  ID: 802390
                </p>
              </div>
            </div>
          </section>
          <section className="product-page__detailed-info-section detailed-info-section section">
            <div className="detailed-info__about-block about-block">
              <div className="about-block__sub-headline-block sub-headline-block">
                <h3 className="sub-headline-block__headline headline headline--3">
                  About
                </h3>
              </div>
              <div className="about-block__content content">
                {selectedProduct?.description.map((content) => (
                  <Paragraph
                    title={content.title}
                    text={content.text}
                    key={content.title}
                  />
                ))}
              </div>
            </div>
            <div className="detailed-info__tech-specs-block tech-specs-block">
              <div className="tech-specs-block__sub-headline-block sub-headline-block">
                <h3 className="sub-headline-block__headline headline headline--3">
                  Tech Specs
                </h3>
              </div>
              <SpecsTable product={selectedProduct} />
            </div>
          </section>

          <section className="product-page__recommended-section recommended-section section">
            <ProductSlider
              products={recommended}
              productsPerScreen={4}
              headline={'You may also like'}
            />
          </section>
        </>
      )}
    </div>
  );
};

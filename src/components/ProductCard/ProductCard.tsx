import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { Product } from '../../types/Product';
import { SpecsTable } from '../SpecsTable/SpecsTable';
import { PriceBlock } from '../PriceBlock/PriceBlock';
import { ProductButtons } from '../ProductButtons/ProductButtons';

// WARNING: WIP

type Props = {
  product: Product;
}

const MAX_SPECIFICATIONS_PER_CARD = 3;

export const ProductCard: React.FC<Props> = ({ product }) => {
  

  return (
    <Link to={`/${product.category}/${product.itemId}`} className='product-card__link' replace>
      <article className={`product-card product-card_${product.id}`}>
      
        <img
          src={`/${product.image}`}
          alt={`${product.category}_image`}
          className="product-card__image"
        />

        <p className="product-card__title">{product.name}</p>

        <PriceBlock product={product}/>

        <div className="product-card__characteristics">
          <SpecsTable product={product} specsAmount={MAX_SPECIFICATIONS_PER_CARD}/>
        </div>

        <ProductButtons />
      
      </article>
    </Link>
  );
};

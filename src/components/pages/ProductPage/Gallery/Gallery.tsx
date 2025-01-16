import { ProductExtended } from '../../../../types/ProductsExtended';
import { GalleryItem } from './GalleryItem/GalleryItem';
import './Gallery.scss';
import { useEffect, useState } from 'react';

type Props = {
    product: ProductExtended;
};

export const Gallery: React.FC<Props> = ({ product }) => {
  const [preview, selectedPreview] = useState(product.images[0]);

  useEffect(() => {
    selectedPreview(product.images[0]);
  }, [product]);

  return (
    <div className="gallery">
      <div className="gallery__image-selector image-selector selector">
        {product.images.map(image => (<GalleryItem selectedPreview={selectedPreview} image={image} preview={preview} key={`image__${product.id}_${image}`}/>))}
      </div>
      <img src={`/${preview}`} className="gallery__preview image" alt={`${product.name}`}></img>
    </div>
  );
};
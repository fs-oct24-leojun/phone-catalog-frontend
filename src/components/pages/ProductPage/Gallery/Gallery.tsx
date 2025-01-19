import { ProductExtended } from '../../../../types/ProductsExtended';
import { GalleryItem } from './GalleryItem/GalleryItem';
import './Gallery.scss';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

type Props = {
  product: ProductExtended;
};

export const Gallery: React.FC<Props> = ({ product }) => {
  const [preview, selectedPreview] = useState(0);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () =>
      selectedPreview((prev) =>
        prev < product.images.length - 1 ? prev + 1 : prev,
      ),
    onSwipedRight: () => selectedPreview((prev) => (prev > 0 ? prev - 1 : 0)),
  });

  return (
    <div className="gallery">
      <div className="gallery__image-selector image-selector selector">
        {product.images.map((image, index) => (
          <GalleryItem
            selectedPreview={selectedPreview}
            image={image}
            preview={product.images[preview]}
            index={index}
            key={`image__${product.id}_${image}`}
          />
        ))}
      </div>
      <div className="gallery__preview-block">
        <img
          src={`/${product.images[preview]}`}
          className="gallery__preview image"
          alt={`${product.name}`}
          {...handleSwipe}
        ></img>
      </div>
    </div>
  );
};

import {
  useCallback, useState, useEffect 
} from 'react';
import { Product } from '../../types/Product';
import { updateLocalStorage } from '../../utils/localStorageHelper';
import { ProductExtended } from '../../types/ProductsExtended';
import './ProductButtons.scss';

type Props = {
  product: Product;
};

export const ProductButtons: React.FC<Props> = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    const isFavourite = favourites.find(
      (item: Product | ProductExtended) => item.id === product.id,
    );

    const carts = JSON.parse(localStorage.getItem('carts') || '[]');
    const isCart = carts.find(
      (item: Product | ProductExtended) => item.id === product.id,
    );

    setIsInFavourite(isFavourite);
    setIsInCart(isCart);
  }, [product]);

  const handleAddToLocalStorage = useCallback(
    (typeOfLocal: 'favourites' | 'carts') => {
      const storage = JSON.parse(localStorage.getItem(typeOfLocal) || '[]');
      const isInStorage = storage.some(
        (item: Product | ProductExtended) => item.id === product.id,
      );

      const updatedStorage =
        isInStorage ?
          storage.filter((item: Product) => item.id !== product.id)
          : [...storage, product];

      switch (typeOfLocal) {
      case 'favourites':
        setIsInFavourite((prevState) => !prevState);
        break;
      case 'carts':
        setIsInCart((prevState) => !prevState);
        break;
      default:
        console.warn('No such storage');
      }

      updateLocalStorage(typeOfLocal, JSON.stringify(updatedStorage));
    },
    [product],
  );

  const handleButtonClick = useCallback(
    (
      event: React.MouseEvent<HTMLButtonElement>,
      type: 'favourites' | 'carts',
    ) => {
      event.preventDefault();
      handleAddToLocalStorage(type);
    },
    [handleAddToLocalStorage],
  );

  return (
    <div className="product product__buttons">
      <button
        onClick={(e) => handleButtonClick(e, 'carts')}
        type="button"
        className={`button button--primary button-add ${isInCart && 'button--primary--selected'}`}
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </button>

      <button
        type="button"
        onClick={(e) => handleButtonClick(e, 'favourites')}
        className={`button button-favourite button--round button--secondary ${isInFavourite && 'button-favourite--selected'}`}
      />
    </div>
  );
};

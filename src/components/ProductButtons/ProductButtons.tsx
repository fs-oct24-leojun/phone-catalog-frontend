import {
  useCallback, useState, useEffect, useContext 
} from 'react';
import { Product } from '../../types/Product';
import { updateLocalStorage } from '../../utils/localStorageHelper';
import { ProductExtended } from '../../types/ProductsExtended';
import './ProductButtons.scss';
import { NotificationContext } from '../../context/NotificationContext';
import { ErrorType } from '../../types/ErrorType';

type Props = {
  product: Product;
};

export const ProductButtons: React.FC<Props> = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);
  const { showNotification } = useContext(NotificationContext);

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
        throw new Error(ErrorType.NO_STORAGE);
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

      try {
        handleAddToLocalStorage(type);
      } catch (error) {
        showNotification(error.message, 'error');
      }
    },
    [handleAddToLocalStorage, showNotification],
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

import { useCallback, useState, useEffect } from "react";
import { Product } from "../../types/Product";
import './ProductButtons.scss'
import { ProductExtended } from "../../types/ProductsExtended";

type Props = {
  product: Product;
  handleDelete?: (id: string) => void;
}

export const ProductButtons: React.FC<Props> = ({ product, handleDelete }) => {
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
    setIsInCart(isCart)
  }, [product]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, type: 'favourites' | 'carts') => {
    event.preventDefault();
    handleAddToLocalStorage(type);
  }

  const handleAddToLocalStorage = useCallback(
    (typeOfLocal: 'favourites' | 'carts') => {
      const storage = JSON.parse(localStorage.getItem(typeOfLocal) || '[]');
      const isInStorage = storage.some(
        (item: Product | ProductExtended) => item.id === product.id
      );

      let updatedStorage;

      if (isInStorage) {
        updatedStorage = storage.filter((item: Product) => item.id !== product.id);
        if (typeOfLocal === 'favourites') {
          setIsInFavourite(false);
        }

        if (typeOfLocal === 'carts') {
          setIsInCart(false);
        }

        if (typeOfLocal === 'favourites' && handleDelete) {
          handleDelete(product.id);
        }
      } else {
        updatedStorage = [...storage, product];
        if (typeOfLocal === 'favourites') {
          setIsInFavourite(true);
        }

        if (typeOfLocal === 'carts') {
          setIsInCart(true);
        }
      }

      localStorage.setItem(typeOfLocal, JSON.stringify(updatedStorage));
    },
    [product, handleDelete]
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
}
import { useCallback, useState, useEffect } from "react";
import { Product } from "../../types/Product";
import './ProductButtons.scss'
import { ProductExtended } from "../../types/ProductsExtended";
// import { updateLocalStorage } from '../../utils/localStorage';

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

    setIsInFavourite(isFavourite);
  }, [product]);

  const handleButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>, callback: () => void) => {
    event.preventDefault();
    callback();
  }, []);

  const handleClickFavourite = () => {
    let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    setIsInFavourite(favourites.find((item: Product | ProductExtended ) => item.id === product.id));

    const isFavourite = favourites.some(
      (item: Product | ProductExtended) => item.id === product.id,
    );

    if (isFavourite) {
      favourites = favourites.filter((item: Product) => item.id !== product.id);
      // updateLocalStorage('favourites', favourites);
      // localStorage.setItem('favourites', JSON.stringify(favourites));

      if (handleDelete) {
        handleDelete(product.id);
      }

      setIsInFavourite(false);
    } else {
      favourites.push(product);
      // localStorage.setItem('favourites', JSON.stringify(favourites));
      // updateLocalStorage('favourites', favourites);
      setIsInFavourite(true);
    }
  };

  return (
    <div className="product product__buttons">
      <button
        onClick={(event) => handleButtonClick(event, () => setIsInCart((prev) => !prev))}
        type="button"
        className={`button button--primary button-add ${isInCart && 'button--primary--selected'}`}
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </button>

      <button
        onClick={(event) => handleButtonClick(event, handleClickFavourite)}
        type="button"
        className={`button button-favourite button--round button--secondary ${isInFavourite && 'button-favourite--selected'}`}
      />
    </div>
  );
}
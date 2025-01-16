import { useCallback, useState } from "react";
import './ProductButtons.scss'

export const ProductButtons: React.FC = () => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);

  const handleButtonClick = useCallback((event, callback) => {
    event.preventDefault();
    callback();
  }, []);

  return (
    <div className="product product__buttons">
      <button
        onClick={(event) => handleButtonClick(event, setIsInCart((prev) => !prev))}
        type="button"
        className={`button button--primary button-add ${isInCart && 'button--primary--selected'}`}
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </button>

      <button
        onClick={(event) => handleButtonClick(event, setIsInFavourite((prev) => !prev))}
        type="button"
        className={`button button-favourite button--round button--secondary ${isInFavourite && 'button-favourite--selected'}`}
      />
    </div>
  );
}
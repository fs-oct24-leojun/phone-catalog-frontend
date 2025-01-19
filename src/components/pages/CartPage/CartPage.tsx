import './CartPage.scss';
import { CartItem } from './CartItem/CartItem';
import {
  useCallback, useEffect, useMemo, useState 
} from 'react';
import { CartProduct } from '../../../types/CartProduct.ts';
import { Back } from '../../Back/Back';
import { updateLocalStorage } from '../../../utils/localStorageHelper.ts';
import { EmptyCartPage } from '../EmptyCartPage/EmptyCartPage.tsx';
import { useNavigate } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const [carts, setCarts] = useState<CartProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleCartsChange = () => {
      const rawCarts = JSON.parse(localStorage.getItem('carts') || '[]');

      setCarts(
        rawCarts.map((cart: CartProduct) => ({
          ...cart,
          quantity: cart.quantity || 1,
        })),
      );
    };

    handleCartsChange();
  }, []);

  useEffect(() => {
    const rawCarts = JSON.parse(localStorage.getItem('carts') || '[]');

    if (JSON.stringify(rawCarts) !== JSON.stringify(carts)) {
      updateLocalStorage('carts', JSON.stringify(carts));
    }
  });

  const updateCounter = useCallback((id: string, quantity: number) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem,
      );

      updateLocalStorage('carts', JSON.stringify(updatedCarts));

      return updatedCarts;
    });
  }, []);

  const totalPrice = useMemo(() => {
    return carts.reduce(
      (sum, cart) => sum + cart.priceRegular * cart.quantity,
      0,
    );
  }, [carts]);

  const handleDeleteCarts = useCallback((id: string) => {
    setCarts((prevCarts) => prevCarts.filter((product) => product.id !== id));
  }, []);

  const handleCheckout = useCallback(() => {
    updateLocalStorage('carts', JSON.stringify([]));
    navigate('/success');
  }, [navigate]);

  return (
    <div className="cart-page">
      <Back />
      {!carts.length ?
        <EmptyCartPage />
        : <>
          <div className="card-page__headline-block headline-block">
            <h1 className="headline-block__headline headline headline--1">
              Cart
            </h1>
          </div>

          <div className="cart-page__container container">
            <div className="cart-page__items">
              {carts.map((cart) => (
                <CartItem
                  handleDelete={handleDeleteCarts}
                  cart={cart}
                  updateCounter={updateCounter}
                  key={cart.id}
                />
              ))}
            </div>
            <div className="cart-page__summary">
              <div className="cart-page__total">
                <h3 className="cart-page__total--price">${totalPrice}</h3>
                <p className="cart-page__total--text">
                  Total for {carts.length} items
                </p>
              </div>
              <div className="cart-page__divider"></div>
              <button
                className="cart-page__checkout-button button button--primary"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      }
    </div>
  );
};
import './CartPage.scss';
import { CartItem } from './CartItem/CartItem';
import { useEffect, useMemo, useState } from 'react';
import { Product } from '../../../types/Product.ts';
import { Back } from '../../Back/Back';

export const CartPage: React.FC = () => {
  const [carts, setCarts] = useState<Product[]>([]);

  const totalPrice = useMemo(() => {
    return carts.reduce((sum, product) => sum + product.priceRegular, 0);
  }, [carts]);

  const handleDeleteCarts = (id: string) => {
    setCarts((prevProducts) => {
      const updatedCarts = prevProducts.filter((product) => product.id !== id);

      localStorage.setItem('carts', JSON.stringify(updatedCarts)); // Update localStorage

      return updatedCarts;
    });
  };

  const handleCartsChange = () => {
    const rawCarts = JSON.parse(localStorage.getItem('carts') || '[]');

    setCarts(rawCarts);
  };

  useEffect(() => {
    handleCartsChange();
  }, []);

  return (
    <>
      <Back />
      <div className="cart-page">
        <h1 className="cart-page__title">Cart</h1>
        {!carts.length ?
          <div className="cart-page__empty">
            <h2 className="cart-page__empty--title">Your cart is empty</h2>
          </div>
          : <div className="cart-page__content">
            <div className="cart-page__items">
              {carts.map((cart) => (
                <div
                  key={cart.id}
                  className="cart-page__item"
                >
                  <CartItem
                    handleDelete={handleDeleteCarts}
                    cart={cart}
                  />
                </div>
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
              <button className="cart-page__checkout">Checkout</button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

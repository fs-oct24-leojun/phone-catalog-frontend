import './CartPage.scss';
import { CartItem } from './CartItem/CartItem';
import { Back } from '../../Back/Back';
// import { useMemo } from 'react';

// eslint-disable-next-line react/jsx-key
const TEST_ORDER = [<CartItem />, <CartItem />, <CartItem />];

export const CartPage: React.FC = () => {
  const isCartEmpty = !TEST_ORDER.length;

  // const totalItems = useMemo(() => {
  //   return TEST_ORDER.reduce((sum, product) => sum + product.quantity, 0);
  // }, [TEST_ORDER]);
  const totalItems = 3;
  // const totalPrice = useMemo(() => {
  //   return TEST_ORDER.reduce((sum, product) => sum + product.price, 0);
  // }, [TEST_ORDER]);
  const totalPrice = 2657;

  return (
    <>
      <Back />
      <div className="cart-page">
        <h1 className="cart-page__title">Cart</h1>
        {isCartEmpty ?
          <div className="cart-page__empty">
            <h2 className="cart-page__empty--title">Your cart is empty</h2>
          </div>
          :
          <div className="cart-page__content">
            <div className="cart-page__items">
              {TEST_ORDER.map((product) => (
                <div
                  key={0} //add id
                  className="cart-page__item"
                >
                  {product}
                </div>
              ))}
            </div>
            <div className="cart-page__summary">
              <div className="cart-page__total">
                <h3 className="cart-page__total--price">${totalPrice}</h3>
                <p className="cart-page__total--text">
                  Total for {totalItems} items
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

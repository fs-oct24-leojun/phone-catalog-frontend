import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Navigation } from './Navigation/Navigation';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { getActivePage } from '../../utils/routingHelper';
import {
  useEffect, useState, useCallback 
} from 'react';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const getCounts =  useCallback(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    const cart = JSON.parse(localStorage.getItem('carts') || '[]');

    setFavouritesCount(favourites.length);
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    window.addEventListener('storage', getCounts);
    window.addEventListener('localStorageUpdated', getCounts);

    return () => {
      window.removeEventListener('storage', getCounts);
      window.removeEventListener('localStorageUpdated', getCounts);
    };
  }, [getCounts]);

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <NavLink to="/" className="header__logo image">
            <img
              src="/img/Logo.png"
              alt=""
              className="header__logo-img img"
            />
          </NavLink>

          <Navigation />

          <div className="header__buttons">
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                getActivePage({
                  isActive,
                  className: 'header__button button  header__button--desktop',
                })
              }
            >
              <div className="icon icon__heart">
                {favouritesCount > 0 && (
                  
                  <span className="header__counter">{favouritesCount }</span>
                )}
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                getActivePage({
                  isActive,
                  className: 'header__button button  header__button--desktop',
                })
              }
            >
              <div className="icon icon__cart">
                {cartCount > 0 && (
                  <span className="header__counter">{cartCount}</span>
                )}
              </div>
            </NavLink>
            <div
              onClick={() => setActiveBurger((prevState) => !prevState)}
              className="header__button button burger"
            >
              <span
                className={classNames('icon', { 'is-active': activeBurger })}
              ></span>
            </div>
          </div>
        </div>
      </header>
      <BurgerMenu
        activeBurger={activeBurger}
        setActiveBurger={setActiveBurger}
      />
    </>
  );
};

import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Navigation } from './Navigation/Navigation';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { getActivePage } from '../../utils/routingHelper';
import {
  useEffect, useState, useCallback, 
  useContext
} from 'react';
import { Switch } from '../Switch/Switch';
import { Counter } from './Counter/Counter';
import classNames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  const getCounts = useCallback(() => {
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
      <header className="header" data-theme={theme}>
        <div className="header__container container">
          <NavLink
            to="/"
            className="header__logo image"
          >
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
                {favouritesCount > 0 && 
                  <Counter count={favouritesCount} />
                }
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
                  <Counter count={cartCount}/>
                )}
              </div>
            </NavLink>
            <div className="header__button button">
              <Switch />
            </div>
            
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
        favouritesCount={favouritesCount}
        cartCount={cartCount}
      />
    </>
  );
};

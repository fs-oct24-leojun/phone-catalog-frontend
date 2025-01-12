import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Navigation } from './Navigation/Navigation';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { getActivePage } from '../../utils/routingHelper';
import { useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__logo image">
            <img
              src="/img/Logo.png"
              alt=""
              className="header__logo-img img"
            />
          </div>

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
              <i className="icon fa-regular fa-heart"></i>
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
              <i className="icon fa-solid fa-bag-shopping"></i>
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

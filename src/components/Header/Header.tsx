import { NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const getActivePage = ({ isActive }: { isActive: boolean }) => {
  return classNames('nav__link', { 'is-active': isActive });
};

export const Header: React.FC = () => {
  const maxMobileSize = 640;

  const [isMobile, setIsMobile] = useState(false);

  const windowResize = () => {
    if (window.innerWidth < maxMobileSize) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', windowResize);
  });

  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__left">
          <div className="header__logo-image image">
            <img
              src="/img/Logo.png"
              alt=""
              className="header__logo-img img"
            />
          </div>
          {!isMobile && (
            <nav className="header__nav nav">
              <ul className="nav__list nav__list--header">
                <li className="nav__item">
                  <NavLink
                    className={getActivePage}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={getActivePage}
                    to="/phones"
                  >
                    Phones
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={getActivePage}
                    to="/tablets"
                  >
                    Tablets
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={getActivePage}
                    to="/accessories"
                  >
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div></div>
        <div className="header__icons">
          {!isMobile ?
            <>
              <NavLink
                to="/favorites"
                className="icon fa-regular fa-heart"
              ></NavLink>
              <NavLink
                to="/cart"
                className="icon fa-solid fa-bag-shopping"
              ></NavLink>
            </>
          : <button className="icon fa-solid fa-bars"></button>
          }
        </div>
      </div>
    </div>
  );
};

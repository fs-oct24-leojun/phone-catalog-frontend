import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Counter } from '../Counter/Counter';
import './BurgerMenu.scss';
import classNames from 'classnames';
import {
  useContext, useEffect, useRef 
} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { NotificationContext } from '../../../context/NotificationContext';

type Props = {
  activeBurger: boolean;
  setActiveBurger: (state: boolean) => void;
  favouritesCount: number;
  cartCount: number;
};

export const BurgerMenu: React.FC<Props> = ({
  activeBurger,
  setActiveBurger,
  favouritesCount,
  cartCount,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    const closeOnOutside = (event: MouseEvent) => {
      try {
        if (menuRef.current?.contains(event.target as Node)) {
          setActiveBurger(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          showNotification(error.message, 'error');
        }
      }
    };

    document.addEventListener('click', closeOnOutside);

    return () => document.removeEventListener('click', closeOnOutside);
  }, [setActiveBurger, showNotification]);

  useEffect(() => {
    document.body.style.overflow = activeBurger ? 'hidden' : 'auto';
  }, [activeBurger]);

  return (
    <div
      ref={menuRef}
      className={classNames('burger-menu', { 'is-active': activeBurger })}
      data-open={activeBurger}
      data-theme={theme}
    >
      <div className="burger-menu__container container">
        <Navigation />
        <div className="burger-menu__buttons">
          <NavLink
            to="/favourites"
            className="burger-menu__button button"
          >
            {favouritesCount > 0 && <Counter count={favouritesCount} />}
            <i className="icon fa-regular fa-heart"></i>
          </NavLink>
          <NavLink
            to="/cart"
            className="burger-menu__button button"
          >
            {cartCount > 0 && <Counter count={cartCount}/>}
            <i className="icon fa-solid fa-bag-shopping"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Counter } from '../Counter/Counter';
import './BurgerMenu.scss';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const closeOnOutside = (event: MouseEvent) => {
      try {
        if (menuRef.current?.contains(event.target as Node)) {
          setActiveBurger(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };

    document.addEventListener('click', closeOnOutside);

    return () => document.removeEventListener('click', closeOnOutside);
  }, [setActiveBurger]);

  return (
    <div
      ref={menuRef}
      className={classNames('burger-menu', { 'is-active': activeBurger })}
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

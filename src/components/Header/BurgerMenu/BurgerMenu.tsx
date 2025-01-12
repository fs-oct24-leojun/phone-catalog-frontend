import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import './BurgerMenu.scss';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

type Props = {
  activeBurger: boolean;
  setActiveBurger: (state: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({
  activeBurger,
  setActiveBurger,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

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
            className="burger-menu__button button burger-menu__button--desktop"
          >
            <i className="icon fa-regular fa-heart"></i>
          </NavLink>
          <NavLink
            to="/cart"
            className="burger-menu__button button  burger-menu__button--desktop"
          >
            <i className="icon fa-solid fa-bag-shopping"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

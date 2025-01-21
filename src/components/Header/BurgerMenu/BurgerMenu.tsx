import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import './BurgerMenu.scss';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useAuth } from '../../../AuthContext';

type Props = {
  activeBurger: boolean;
  setActiveBurger: (state: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({
  activeBurger,
  setActiveBurger,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { userLoggedIn } = useAuth();

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
            <i className="icon fa-regular fa-heart"></i>
          </NavLink>
          {userLoggedIn ?
            <NavLink
              to="/cart"
              className="burger-menu__button button"
            >
              <i className="icon fa-solid fa-bag-shopping"></i>
            </NavLink> : 
            <NavLink
              to="/login"
              className="burger-menu__button button"
            >
              <i className="fa-regular fa-right-to-bracket"></i>
            </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

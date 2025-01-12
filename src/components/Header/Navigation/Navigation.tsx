import { getActivePage } from '../../../utils/routingHelper';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className={getActivePage}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/catalog/phones"
            className={getActivePage}
          >
            Phones
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/catalog/tablets"
            className={getActivePage}
          >
            Tablets
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/catalog/accessories"
            className={getActivePage}
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

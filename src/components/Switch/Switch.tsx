import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Themes } from '../../types/Themes';
import './Switch.scss';

export const Switch: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setTheme((prevTheme) =>
      prevTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT,
    );
  };

  return (
    <span
      className="switcher"
      onClick={() => toggleSwitch()}
    >
      {theme === Themes.LIGHT ?
        <i className="fa-regular fa-sun" />
        : <i className="fa-regular fa-moon" />}
    </span>
  );
};

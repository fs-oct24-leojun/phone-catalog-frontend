import React, { useContext, useState } from "react";
import "./Switcher.scss";
import classNames from "classnames";
import { ThemeContext } from "../../ThemeContext";
import { Themes } from "../../types/Themes";

const Switcher = () => {
  const [isActive, setIsActive] = useState(false);
  const themeValue = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsActive(!isActive);
    const theme = !isActive ? Themes.Dark : Themes.Light;

    themeValue.setTheme(theme);
  };

  return (
    <div
      className={`switcher ${isActive ? "switcher--active" : ""}`}
      onClick={toggleSwitch}
      role="button"
      aria-pressed={isActive}
    >
      <div className={classNames("switcher__track", {'switcher__track--dark': isActive })} >
        <span className="switcher__icon">
          {isActive ? <i className="fa-regular fa-moon" /> : <i className="fa-regular fa-sun" /> }
        </span>
      </div>
      <div className="switcher__thumb"></div>
    </div>
  );
};

export default Switcher;
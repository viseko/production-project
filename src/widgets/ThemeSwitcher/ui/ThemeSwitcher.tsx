import { classNames } from "shared/lib/classNames";

import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className? : string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      {
        (theme === Theme.LIGHT) ?
          <LightIcon /> :
          <DarkIcon />
      }
      
    </button>
  ) 
} 
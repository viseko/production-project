import { classNames } from "shared/lib/classNames";

import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className? : string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme = {ThemeButton.CLEAR}
    >
      {
        (theme === Theme.LIGHT) ?
          <LightIcon /> :
          <DarkIcon />
      }
      
    </Button>
  ) 
} 
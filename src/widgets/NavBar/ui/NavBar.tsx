import { classNames } from "shared/lib/classNames";

import cls from "./NavBar.module.scss";
import { Applink } from "shared/ui/Applink";
import { AppLinkTheme } from "shared/ui/Applink/ui/Applink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavBarProps {
  className? : string;
}

export const NavBar = ({className}: NavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <ThemeSwitcher className={"kekeke"} />
      
      <div className={cls.links}>
        <Applink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>Главная</Applink>
        <Applink theme={AppLinkTheme.SECONDARY} to={"/about"}>О сайте</Applink>
      </div>
    </div>
  )
}
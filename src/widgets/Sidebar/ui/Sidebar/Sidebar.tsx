import { useState } from "react";
import { classNames } from "shared/lib/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className? : string;
}

export const Sidebar = (props: SidebarProps) => {
  const {
    className
  } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div
      className={classNames(cls.Sidebar, {
        [cls.collapsed]: collapsed
      }, [className])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher className={"kekeke"} />
        <LangSwitcher />
      </div>
    </div>
  ) 
} 
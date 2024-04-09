import { classNames } from "shared/lib/classNames";

import cls from "./Applink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ApplinkProps extends LinkProps {
  className? : string;
  theme?: AppLinkTheme;
}

export const Applink: FC<ApplinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  
  return (
    <Link
      to={to}
      className={classNames(cls.Applink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
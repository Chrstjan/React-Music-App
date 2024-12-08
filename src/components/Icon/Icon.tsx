import { ReactNode } from "react";

type IconType = {
  action: () => void;
  style: string;
  children: ReactNode;
  lightTheme?: boolean;
};

import s from "./Icon.module.scss";

export const Icon = ({ action, style, children, lightTheme }: IconType) => {
  const classNames = style
    .split(" ")
    .map((classNames) => s[classNames])
    .join(" ");
  return (
    <span
      onClick={() => action()}
      className={`${s.iconStyling} ${classNames} ${
        lightTheme ? s.lightMode : ""
      }`}
    >
      {children}
    </span>
  );
};

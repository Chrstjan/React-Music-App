import { ReactNode } from "react";

type WrapperType = {
  children: ReactNode;
  styling: string;
  lightTheme?: boolean;
};

import s from "./Wrapper.module.scss";

export const Wrapper = ({ children, styling, lightTheme }: WrapperType) => {
  const classNames = styling
    .split(" ")
    .map((className) => s[className])
    .join(" ");

  return (
    <section
      className={`${s.wrapperStyling} ${classNames} ${
        lightTheme ? s.lightMode : ""
      }`}
    >
      {children}
    </section>
  );
};

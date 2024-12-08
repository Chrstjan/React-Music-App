type ButtonType = {
  action: () => void;
  type: string;
  text: string;
  lightTheme?: boolean;
};

import s from "./Button.module.scss";

export const Button = ({ action, type, text, lightTheme }: ButtonType) => {
  const classNames = type
    .split(" ")
    .map((className) => s[className])
    .join(" ");

  return (
    <button
      onClick={() => action()}
      className={`${s.buttonStyling} ${classNames} ${
        lightTheme ? s.lightMode : ""
      }`}
    >
      {text}
    </button>
  );
};

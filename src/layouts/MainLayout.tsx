import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  // const { isDarkMode, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <Outlet />
    </>
  );
};

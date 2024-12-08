import { ComponentType } from "react";
import { LandingPage } from "../pages/LandingPage";

interface RouterInterface {
  title: string;
  url: string;
  page: ComponentType;
}

export const Paths: RouterInterface[] = [
  {
    title: "Home",
    url: "/",
    page: LandingPage,
  },
];

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../layouts/MainLayout";

export const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {Paths.map((item) => {
            return <Route path={item.url} element={<item.page />} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
};

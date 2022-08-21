import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ActualApp } from "./components/ActualApp";
import { BasicAnimations } from "./components/Playground";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActualApp />} />
        <Route path="playground" element={<BasicAnimations />} />
        <Route path="*" element={<h1>404 Page not found!</h1>} />
      </Routes>
    </>
  );
};

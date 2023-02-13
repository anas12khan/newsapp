import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./src/App";
import ArticleContent from "./src/component/article/articleContent";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<App />} />
        <Route path={"/articles"} element={<ArticleContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;

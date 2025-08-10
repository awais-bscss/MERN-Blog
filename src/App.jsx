import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticleList from "./pages/ArticlesList";
import Article from "./pages/Article";
import About from "./pages/About";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articlesList" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

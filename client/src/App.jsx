import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ArticleList from "./Pages/ArticleList";
import NavBar from "./Components/NavBar";
import NotFound from "./Pages/NotFound";
import Article from "./Pages/Article";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/articleList" element={<ArticleList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

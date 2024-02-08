import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

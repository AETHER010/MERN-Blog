import Home from './pages/Home';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import About from './pages/About';
import Articles from './pages/ArticlesList';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
//components
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      
      <Router >
      <Navbar/>
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:name" element={<Article />} />
      <Route path="/article-list" element={<ArticlesList />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Home /> */}
     
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
